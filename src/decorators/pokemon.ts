function printToConsole(constructor: Function) {
  console.log(constructor)
}

const printToConsoleConditional = (isPrinted = false): Function => {
  if (isPrinted) {
    return printToConsole
  }

  return () => {}
}

const lockPrototype = function (constructor: Function) {
  Object.seal(constructor)
  Object.seal(constructor.prototype)
}

@lockPrototype
@printToConsoleConditional(true)
export class Pokemon {
  public publicApi = 'https://pokeapi.co'

  constructor(public name: string) {}
}
