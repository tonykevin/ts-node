function checkValidPokemonId() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value

    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error('El id del pokemon debe de estar entre 1 y 800')
      } else {
        originalMethod(id)
      }
    }
  }
}

export class Pokemon {
  public publicApi = 'https://pokeapi.co'

  constructor(public name: string) {}

  @checkValidPokemonId()
  savePokemonToDB(id: number) {
    console.log(`Pokemon is saved in DB ${id}`)
  }
}
