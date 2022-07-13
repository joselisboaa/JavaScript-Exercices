class aluno {
  constructor(name, grades, semester){
    this.name = name
    this.grades = grades
    this.semester = semester
  }
}

class MediaEscolar extends aluno {
  
  calculaMedia(grades) {
    let gradesList = ''
    let gradesN = 0
    this.gradeF = grades.forEach(grades => {
      gradesN += grades
    });

    alert('Média Final: ' + gradesN / 5)
  }
}

const totalGrades = [];

function showMenu() {
  let chosenOption

  while(chosenOption != '1' && chosenOption != '2' && chosenOption != '3' && chosenOption != '4'){
    chosenOption = prompt('1 - Registrar nota\n' +
                          '2 - Consultar notas\n' +
                          '3 - Média final\n' +
                          '4 - Sair do programa\n')
  }
  return chosenOption;
}

const alunos = new MediaEscolar(totalGrades)
let chosenOption

function registerGrade() {
  const register = Number(prompt(`Nota ${totalGrades.length + 1}: `))
  if(register === NaN || (register > 10 || register < 0)){
    alert('Nota inválida, coloque uma nota válida')
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
      alert('Nota: ' + totalGrades.join(`\nNota: `));
      break;
    case '3': 
      alunos.calculaMedia(totalGrades);
      break;
    case '4':
      break;
  }
}
