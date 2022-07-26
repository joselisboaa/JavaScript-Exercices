class aluno {
  constructor(name, grades, semester){
<<<<<<< HEAD
    this.name = name;
    this.grades = grades;
    this.semester = semester;
=======
    this.name = name
    this.grades = grades
    this.semester = semester
>>>>>>> adc93baee8ca5ab86fe25d3402821d34f0c47283
  }
}

class MediaEscolar extends aluno {
  calculaMedia(grades) {
<<<<<<< HEAD
    let gradesList = '';
    let gradesN = 0;
    this.gradeF = grades.forEach(grades => {
      gradesN += grades;
    });

    alert('Média Final: ' + gradesN / 5);
=======
    let gradesList = ''
    let gradesN = 0
    this.gradeF = grades.forEach(grades => {
      gradesN += grades
    });

    alert('Média Final: ' + gradesN / 5)
>>>>>>> adc93baee8ca5ab86fe25d3402821d34f0c47283
  }
}

const totalGrades = [];

function showMenu() {
<<<<<<< HEAD
  let chosenOption;
=======
  let chosenOption
>>>>>>> adc93baee8ca5ab86fe25d3402821d34f0c47283

  while(chosenOption != '1' && chosenOption != '2' && chosenOption != '3' && chosenOption != '4'){
    chosenOption = prompt('1 - Registrar nota\n' +
                          '2 - Consultar notas\n' +
                          '3 - Média final\n' +
<<<<<<< HEAD
                          '4 - Sair do programa\n');
=======
                          '4 - Sair do programa\n')
>>>>>>> adc93baee8ca5ab86fe25d3402821d34f0c47283
  }
  return chosenOption;
}

<<<<<<< HEAD
const alunos = new MediaEscolar(totalGrades);
let chosenOption;

function registerGrade() {
  const register = Number(prompt(`Nota ${totalGrades.length + 1}: `));
  if(register === NaN || (register > 10 || register < 0)){
    alert('Nota inválida, coloque uma nota válida');
=======
const alunos = new MediaEscolar(totalGrades)
let chosenOption

function registerGrade() {
  const register = Number(prompt(`Nota ${totalGrades.length + 1}: `))
  if(register === NaN || (register > 10 || register < 0)){
    alert('Nota inválida, coloque uma nota válida')
>>>>>>> adc93baee8ca5ab86fe25d3402821d34f0c47283
    return registerGrade();
  }
  return register;
}

while(chosenOption != '4'){
  chosenOption = showMenu();
  switch(chosenOption){
    case '1':
      while(totalGrades.length < 5){
        let gradeAdd = registerGrade();
        totalGrades.push(gradeAdd);
      }
      break;
    case '2':
      if(totalGrades.length === 0){
<<<<<<< HEAD
        alert('Ainda não há notas registradas');
=======
        alert('Ainda não há notas registradas')
>>>>>>> adc93baee8ca5ab86fe25d3402821d34f0c47283
        break;
      }
      alert('Nota: ' + totalGrades.join(`\nNota: `));
      break;
    case '3': 
      if(totalGrades.length === 0){
<<<<<<< HEAD
        alert('Ainda não há notas registradas');
=======
        alert('Ainda não há notas registradas')
>>>>>>> adc93baee8ca5ab86fe25d3402821d34f0c47283
        break;
      }
      alunos.calculaMedia(totalGrades);
      break;
    case '4':
      break;
  }
}
