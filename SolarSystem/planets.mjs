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
    this.name = name
    this.gravity = gravity
  }

  calculateWeight(objectMass) {
    return new Promise((resolve, reject) => {
      weight = this.gravity * objectMass
      if(objectMass > 0 && this.gravity != undefined){
        resolve(weight)
      } else {
        reject('É necessário um valor válido de massa e selecionar um Planeta')
      }
    })
  }
}

export { Planets, planetsGravity }