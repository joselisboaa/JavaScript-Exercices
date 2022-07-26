let weight

const planetsGravity = {
  mercury: 3.7,
  venus: 8.87,
  earth: 9.807,
  mars: 3.721,
  jupiter: 24.79,
  saturn: 10.44,
  uranus: 8.87,
  neptune: 11.15
}

class Planets {
  constructor(name, gravity){
<<<<<<< HEAD
    this.name = name;
    this.gravity = gravity;
  }

  async calculateWeight(objectMass) {
      weight = this.gravity * objectMass;
      if(objectMass > 0 && this.gravity != undefined){
        return weight;
      } else {
        return Promise.reject('É necessário um valor válido de massa e selecionar um Planeta');
=======
    this.name = name
    this.gravity = gravity
  }

  async calculateWeight(objectMass) {
      weight = this.gravity * objectMass
      if(objectMass > 0 && this.gravity != undefined){
        return weight
      } else {
        return Promise.reject('É necessário um valor válido de massa e selecionar um Planeta')
>>>>>>> adc93baee8ca5ab86fe25d3402821d34f0c47283
      }
  }
}

<<<<<<< HEAD
export { Planets, planetsGravity };
=======
export { Planets, planetsGravity }
>>>>>>> adc93baee8ca5ab86fe25d3402821d34f0c47283
