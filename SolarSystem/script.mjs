import { Planets, planetsGravity } from './planets.mjs'

const planetImage = document.createElement('img');
const container = document.createElement('div');
const outputText = document.createElement('h2');

const massInput = document.querySelector('#mass');
const myForm = document.querySelector('#myform');
const planetSelected = document.querySelector('#planetSelected');

document.body.appendChild(container);

myForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const planet = new Planets(planetSelected.value, planetsGravity[planetSelected.value]);
  
  container.classList.add('container');
  outputText.classList.add('outputText');
  planetImage.classList.add('planetImg');
    
  planet.calculateWeight(Number(massInput.value)).then((weight) => {
    container.appendChild(planetImage);
    planetImage.setAttribute('src', `./assets/${planetSelected.value}.png`);

    container.appendChild(outputText); 
    outputText.innerText = `A massa do objeto é de \n ${weight} N`;
  }).catch(error => {
    container.appendChild(outputText)  ;  
    
    outputText.innerText = error;
    container.removeChild(planetImage);
  })
})
