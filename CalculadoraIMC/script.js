const form = document.querySelector('#imc-form');
const inputAge = document.querySelector('#age');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');
const inputGender = document.querySelector('#gender');

form.addEventListener('submit', event => {
  event.preventDefault();
  calculateBMI(Number(inputWeight.value), Number(inputHeight.value), Number(inputAge.value), inputGender.value);
})

async function calculateBMI(weight, height, age, gender) {
  const bmi = weight * 10000 / (height * height);
  const resultElement = document.querySelector('.calc-result');
  const resultElementRate = document.querySelector('.bmi-rate');

  resultElementRate.classList.remove('low-bmi');
  resultElementRate.classList.remove('avg-bmi');
  resultElementRate.classList.remove('over-bmi');
  resultElementRate.classList.remove('obesity1-bmi');
  resultElementRate.classList.remove('obesity2-bmi');
  resultElementRate.classList.remove('obesity3-bmi');
  if (height > 0 && weight > 0 && age > 0 && gender !== ''){
    resultElement.innerHTML = `o seu IMC é <strong>${bmi.toFixed(2)}</strong> kg/m²`;
    if(bmi < 18.5) {
      resultElementRate.innerHTML = `Abaixo do Peso`;
      resultElementRate.classList.add('low-bmi');
    } else if(bmi >= 18.5 && bmi < 25) {
      resultElementRate.innerHTML = `Peso Normal`;
      resultElementRate.classList.add('avg-bmi');
    } else if(bmi >= 25 && bmi < 30) {
      resultElementRate.innerHTML = `Sobrepeso`;
      resultElementRate.classList.add('over-bmi');
    } else if(bmi >= 30 && bmi < 35) {
      resultElementRate.innerHTML = `Obesidade`;
      resultElementRate.classList.add('obesity1-bmi');
    } else if(bmi >= 35 && bmi < 40) {
      resultElementRate.innerHTML = `Obesidade Severa`;
      resultElementRate.classList.add('obesity2-bmi');
    } else if(bmi >= 40) {
      resultElementRate.innerHTML = `Obesidade Mórbida`;
      resultElementRate.classList.add('obesity3-bmi');
    } else {
      resultElementRate.innerHTML = 'Verifique se as informações estão corretas';
    }
    console.log(bmi);
  } else {
    resultElement.innerText = '';
    return Promise.reject('Teste');
  }
}