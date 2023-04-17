import { getPokemon } from './generics/getPokemon'

getPokemon(4)
  .then(pokemon => console.log(pokemon.sprites.front_default))
  .catch(error => console.error(error))
  .finally(() => console.log('Finished to get pokemon'))
