export const printObject = (argument: any): void => {
  console.log(argument)
}

export function genericFunction<T>(argument: T) {
  return argument
}

export const genericArrowFunction = <T>(argument: T) => argument
