class list {
  constructor(item) {
    this.item = item;
  }
  info() {
    return this.item;
  }
}

let tarefa = document.getElementsByName('tarefa')[0];
let form = document.querySelector('form');
let i = 0;

form.addEventListener('submit', e => {
  let li = document.createElement('li');
  let checkbox = document.createElement('input');
  const task = new list(tarefa.value);
  let div = document.createElement('div');

  div.classList.add('list');

  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('onchange', 'done(this)');
  e.preventDefault();
  document.querySelector('ul').appendChild(div);
  document.querySelectorAll('.list')[i].appendChild(checkbox);
  document.querySelectorAll('.list')[i].appendChild(li);

  li.textContent = task.info();
  ++i;
  console.log(i);
})

function done(e){
  setTimeout(function(){
  e.parentNode.classList.add('visibility');
  },1000);
  
  setTimeout(function(){ 
  e.parentNode.classList.add('hidden');
  },500);
};