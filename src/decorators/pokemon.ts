function printToConsole(constructor: Function) {
  console.log(constructor)
}

@printToConsole
export class Pokemon {
  public publicApi = 'https://pokeapi.co'

  constructor(public name: string) {}
}
