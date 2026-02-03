# Values

Escribe una función que devuelva una lista de valores de todas las propiedades de un objeto:

```javascript
function values(obj) {
  // Implementation here
}

// Ejemplo:
console.log(
  values({ id: 31, duration: 310, name: "long video", format: "mp4" })
); // [31, 310, "long video", "mp4"]
```

## Challenge

Evita añadir las propiedades heredadas en caso de ser instancia de una clase:

```javascript
// Ejemplo:
function Person(name) {
  this.name = name;
}

Person.prototype.walk = function () {
  console.log("I'm walking");
};

var john = new Person("John");
console.log(values(john)); // ["John"]; en vez de ["John"; function() { console.log("I'm walking"); }]

// MI SOLUCION

function values(obj) {
  let vals = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      vals.push(obj[key]);
    } else {
      console.log("Esta propiedad es heredada", obj[key]);
    }
  }
  return vals;
}
console.log(
  "%c\nEJERCICIO 114 Values",
  "font-weight: bold; color: green; font-size: 24px"
);
console.log(
  values({ id: 31, duration: 310, name: "long video", format: "mp4" })
); // [31, 310, "long video", "mp4"]

function Person(name) {
  this.name = name;
}

Person.prototype.walk = function () {
  console.log("I'm walking");
};

var john = new Person("John");
console.log(values(john));
```

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
