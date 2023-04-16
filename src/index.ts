import { genericArrowFunction } from './generics/generics'
import { Hero } from './interfaces/hero'
import { Villian } from './interfaces/villian'

const deadpool = {
  name: 'Deadpool',
  realName: 'Wade Winston Wilson',
  dangerLevel: 130,
}

console.log(genericArrowFunction(deadpool).realName)
console.log(genericArrowFunction<Hero>(deadpool).realName)
console.log(genericArrowFunction<Villian>(deadpool).dangerLevel)
