# Ts-node

Curso para aprender javascript

## Genéricos

Son funciones que reciben argumentos particulares para discriminar los argumentos principales de la función propiamente dicha.

### Definición

#### Función simple

```ts
function genericFunction<T>(parameter: T) {
  return parameter
}
```

#### Función flecha

```ts
const genericArrowFunction = <T>(paramter: T) => parameter
```

### Ejecución de la función

Cuando llama a la función genérica, Typescript según los datos proporcionados, infiere los tipos correspondientes según los argumentos.

```ts
genericFunction(3.1416).toFixed(2)
genericFunction('Hola mundo').toUpperCase()
genericArrowFunction(new Date()).getDate()
```

Si deseas restringir los paramétros, se especifica el parámetro.

```ts
genericArrowFunction<Hero>(deadpool).realName
genericArrowFunction<Villian>(deadpool).dangerLevel
```
