import { getPokemon } from './generics/getPokemon'

getPokemon(4)
  .then(resp => console.log(resp))
  .catch(error => console.error(error))
  .finally(() => console.log('Finished to get pokemon'))
