# Clone Merge

## Apartado A

Implementa una función `clone` que devuelva un objeto clonado a partir de otro:

```javascript
function clone(source) {
  // Implementation here.
  return { ...source };
}

function merge(source, target) {
  // Implementation here.
  const newTarget = clone(target);
  for (let key in source) {
    newTarget[key] = source[key];
  }
  return newTarget;
}

var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };

console.log(
  "%c\nEJERCICIO 104 Clone Merge",
  "font-weight: bold; color: green; font-size: 24px"
);
console.log(merge(a, b)); // { name: "Maria", surname: "Ibañez", country: "SPA" }
```

## Apartado B

Dados dos objetos cualesquiera, implementa una función `merge` que mezcle uno sobre otro. El objeto resultante debe ser la mezcla de las propiedades del objeto `source` sobre las del objeto `target`.

**TIP**: Usa la función `clone` del apartado A.

```javascript
function merge(source, target) {
  // Implementation here.
}

// Por ejemplo, dados estos 2 objetos:
var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };

// El resultado de mezclar a sobre b sería:
merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
```

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
