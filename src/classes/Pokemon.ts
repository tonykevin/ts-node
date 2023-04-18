import { checkValidPokemonId } from '../decorators'

export class Pokemon {
  public publicApi = 'https://pokeapi.co'

  constructor(public name: string) {}

  @checkValidPokemonId()
  savePokemonToDB(id: number) {
    console.log(`Pokemon is saved in DB ${id}`)
  }
}
