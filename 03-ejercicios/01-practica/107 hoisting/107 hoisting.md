# Hoisting

**NOTA**: Realiza estos ejercicios en vanilla JS. Si estás utilizando un playground de TypeScript obtendrás errores.

## Apartado A

¿Cual crees que será el resultado de la consola y porqué?

**TIP**: escribe el código equivalente.

```javascript
function f() {
  console.log(a); // UNDEFINED -> Correcto
  console.log(g()); // GOOD JOB -> Error Resultado Undefined

  var a = "good job!";
  function g() {
    return a;
  }
  console.log(a); // GOOD JOB -> Correcto
}

f();

// MI SOLUCION
```

## Apartado B

¿Y ahora?

```javascript
var a = 1;

(function () {
  console.log(a);
  var a = 2;
  b = 4;
  var c = 3;
})(); // Esto se ejecuta una vez y desaparece ya que la funcion no se guarda en ninguna variable

console.log(a); // 1
console.log(b); // Undefined -> Error la respuesta es 4 ya que la variable b se crea implícitamente
console.log(c); // Uncaught ReferenceError: c is not define
```

## Apartado C

¿Y con esta ligera variación?

```javascript
f();
var a = 1; // UNDEFINED -> Correcto

function f() {
  console.log(a);
  b = 4;
  var c = 3;
}

console.log(a); // 1 -> correcto
console.log(b); // 4 -> correcto
console.log(c); // Uncaught ReferenceError: c is not defined
```

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
