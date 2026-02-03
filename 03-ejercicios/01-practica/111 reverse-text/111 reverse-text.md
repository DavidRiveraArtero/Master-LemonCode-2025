# Reverse Text

Dado un texto cualquiera, invierte el orden de las palabras.

**TIP**: Se hace en 1 sola línea.

```
Ejemplo: "Uno dos tres" --> "tres dos Uno"
```

**TIP**: Consulta la documentación en MDN sobre los strings, verás que incorporan muchas funciones de utilidad para el manejo y manipulación de strings.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype

```javascript
function reverseText(text) {
  // Implementation here.
}

// MI SOLUCION
function reverseText(text) {
  return text.split(" ").reverse().join(" ");
}
console.log(
  "%c\nEJERCICIO 111 Reverse Text",
  "font-weight: bold; color: green; font-size: 24px"
);
console.log(reverseText("Uno dos tres")); // "tres dos Uno"
```

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
