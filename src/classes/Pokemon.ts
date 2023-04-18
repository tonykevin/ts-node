import { checkValidPokemonId, readonly } from '../decorators'

export class Pokemon {
  @readonly()
  public publicApi = 'https://pokeapi.co'

  constructor(public name: string) {}

  @checkValidPokemonId()
  savePokemonToDB(id: number) {
    console.log(`Pokemon is saved in DB ${id}`)
  }
}
