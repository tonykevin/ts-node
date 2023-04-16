import { genericArrowFunction } from './generics/generics'
import { Hero, Villian } from './interfaces'

const deadpool = {
  name: 'Deadpool',
  realName: 'Wade Winston Wilson',
  dangerLevel: 130,
}

console.log(genericArrowFunction(deadpool).realName)
console.log(genericArrowFunction<Hero>(deadpool).realName)
console.log(genericArrowFunction<Villian>(deadpool).dangerLevel)
