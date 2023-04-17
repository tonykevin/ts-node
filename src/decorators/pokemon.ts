function printToConsole(constructor: Function) {
  console.log(constructor)
}

const printToConsoleConditional = (isPrinted = false): Function => {
  if (isPrinted) {
    return printToConsole
  }

  return () => {}
}

@printToConsoleConditional(true)
export class Pokemon {
  public publicApi = 'https://pokeapi.co'

  constructor(public name: string) {}
}
