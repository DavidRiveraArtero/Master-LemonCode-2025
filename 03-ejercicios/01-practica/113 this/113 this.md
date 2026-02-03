# This

¿Cual es la salida de los logs en el siguiente código? Intenta razonar, no te limites a ejecutar la solución.

```javascript
var surname = "Pérez";
var person = {
  name: "Juan",
  surname: "González",
  wife: {
    name: "Ana",
    surname: "Jiménez",
    getSurname: function () {
      return this.surname;
    },
  },
};

/*  
        ---- ACIERTO -----
    Tendria que regresar Jimenez ya que en teoria cuando usamos
    el .this hacemos referencia al username del objeto wife

*/
console.log(person.wife.getSurname());

/*
        ---- ERROR -----
    En este guardamos la funcion getSurname en una funcion 
    donde luego la usaremos para printar Jimenez

    El error es que en este caso this.surName hace referencia al surName de primer nivel 
*/
var surnameFunction = person.wife.getSurname;
console.log(surnameFunction());

/*
        ---- ACIERTO -----
    En este caso al usar la función call el userName sera Gonzalez
    ya que call es una función que sustituye un objeto por otro
*/
console.log(surnameFunction.call(person));
```

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
