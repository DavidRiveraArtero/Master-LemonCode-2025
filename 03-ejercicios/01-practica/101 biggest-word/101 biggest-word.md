# Biggest Word

Crea una función que reciba una frase en formato string y devuelva la palabra más larga. En caso de haber varias con longitud máxima que devuelva siempre la primera. Ten en cuenta que consideramos una palabra a aquello que esté separado por espacios.

**TIP**: Consulta la documentación en MDN sobre los strings, verás que incorporan muchas funciones de utilidad para el manejo y manipulación de strings.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype

```javascript
function biggestWord(phrase) {
  // Implementation here
}

// Ejemplo
console.log(biggestWord("Esta frase puede contener muchas palabras")); // "contener"
console.log(biggestWord("Ejercicios básicos de JavaScript")); // "Ejercicios"

// MI SOLUCION
function biggestWord(phrase) {
  let biggest = "";
  phrase.split(" ").forEach((element) => {
    if (element.length > biggest.length) {
      biggest = element;
    }
  });
  return biggest;
}
console.log(
  "%c\nEJERCICIO 101 Biggest Word",
  "font-weight: bold; color: green; font-size: 24px"
);
console.log(biggestWord("The quick brown fox jumped over the lazy dog")); // "jumped"
```

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
