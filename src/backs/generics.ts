export const printObject = (parameter: any): void => {
  console.log(parameter)
}

export function genericFunction<T>(parameter: T) {
  return parameter
}

export const genericArrowFunction = <T>(parameter: T) => parameter
