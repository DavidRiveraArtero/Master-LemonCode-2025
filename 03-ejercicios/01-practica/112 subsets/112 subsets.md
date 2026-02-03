# Subsets

Escribe una función que acepte un string como argumento y devuelva todas las partes finales de dicha palabra:

```javascript
function subsets(word) {
  // Implementation here
}

// Ejemplo
console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]
```

## Challenge

Repite el ejercicio anterior sin utilizar arrays auxiliares ni bucles for/do/while.

```javascript
function subsets(word) {
  let newWord = [];
  for (var x = 1; x < word.split("").length; x++) {
    newWord.push(word.split("").slice(x).join(""));
  }

  // MI CHALLENGE
  return word.split("").map((_, index) => {
    return word.substr(index);
  });

  // CHALLENGE PROFE
  /*  return Array.prototype.map.call(word.substr(1), function (_val, i) {
            return word.substr(i + 1);
        })
    */
}

console.log(
  "%c\nEJERCICIO 112 Subsets",
  "font-weight: bold; color: green; font-size: 24px"
);
console.log(subsets("message"));
```

TIP: Una forma válida de "iterar" es utilizando algún método de los Arrays: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
