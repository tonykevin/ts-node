import { genericArrowFunction, genericFunction } from './generics/generics'

console.log(genericFunction(3.1416).toFixed(2))
console.log(genericFunction('Hola mundo').toUpperCase())
console.log(genericArrowFunction(new Date()).getDate())
