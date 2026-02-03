# Console

## Apartado A

Intenta razonar cual será el resultado de la consola al ejecutar este código:

```javascript
var a = 1;
let b = 2;

{
  try {
    console.log(a, b); // error
  } catch (error) {}
  let b = 3;
  console.log(a, b); // error
}

console.log(a, b); // 1,2

() => {
  console.log(a);
  var a = 5;
  let b = 6;
  console.log(a, b);
}; // NO entra

console.log(a, b); // 1 ,2
```

## Apartado B

Sin tocar ninguno de los `console.log` anteriores, modifica ligeramente el código para que muestre la siguiente secuencia:

```
1 3
1 3
1 2
5
5 6
1 2
```

```javascript
var a = 1;
let b = 2;

{
  let b = 3;
  try {
    console.log(a, b);
  } catch (error) {}
  console.log(a, b);
}

console.log(a, b);

const func = () => {
  var a = 5;
  console.log(a);
  let b = 6;
  console.log(a, b);
};
func();

console.log(a, b);
```

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
