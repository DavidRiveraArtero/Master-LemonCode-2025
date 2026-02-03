# Califications

> **NOTA IMPORTANTE**: Realiza primero el ejercicio "Values".

Dada la calificación de alumnos de una clase en forma de objeto como el siguiente:

```javascript
const eso2o = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
};
```

Implementa una función que muestre la media de la clase de forma textual, es decir, siguiendo el sistema de calificación español:

- Matrícula de Honor = 10
- Sobresaliente = entre 9 y 10
- Notable = entre 7 y 9
- Bien = entre 6 y 7
- Suficiente = entre 5 y 6
- Insuficiente = entre 4 y 5
- Muy deficiente = por debajo de 4

```javascript
// MI SOLUCION
const eso2o = {
  David: 7.25,
  Maria: 9.5,
  Jose: 7.75,
  Juan: 7.5,
  Blanca: 6.75,
  Carmen: 7,
};

function calcMedia(esi2o) {
  const total = Object.values(esi2o);
  return total.reduce((acc, curr) => acc + curr, 0) / total.length;
}

function printAverage(classResults) {
  switch (Math.floor(classResults)) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      console.log("Insuficiente");
      break;
    case 5:
      console.log("Suficiente");
      break;
    case 6:
      console.log("Bien");
      break;
    case 7:
    case 8:
      console.log("Notable");
      break;
    case 9:
      console.log("Sobresaliente");
      break;
    case 10:
      console.log("Matrícula de Honor");
      break;

    default:
      console.log("ERROR");
  }
}
console.log(
  "%c\nEJERCICIO 102 Califications",
  "font-weight: bold; color: green; font-size: 24px"
);
printAverage(calcMedia(eso2o));
```

**TIP**: Rompe en tantas funciones auxiliares como necesites.

**TIP**: Utiliza el ejercicio "values" para extraer los valores de un objeto. En `Array.prototype` también cuentas con otro método que podría resultarte útil para transformar un array a un único valor.

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
