# Ts-node

Curso para aprender javascript

## Genéricos

Son funciones que reciben argumentos particulares para discriminar los argumentos principales de la función propiamente dicha.

### Definición en una función simple

```ts
function genericFunction<T>(argument: T) {
  return argument
}
```

### Definición en una función flecha

```ts
const genericArrowFunction = <T>(argument: T) => argument
```
