# Args

Dada la siguiente función:

```javascript
function f(a, { b } = {}, c = 100) {
  console.log(arguments.length);
  console.log(a, a === arguments[0]);
  console.log(b, b === arguments[1]);
  console.log(c, c === arguments[2]);
}
```

## Apartado A

¿Qué muestra por consola esta llamada?

```javascript
/*
    primer console log: INCORRECTO:3 ya que tenemos 3 argumentos 
                        CORRECTO: 2 ya que arguments solo cuenta los que pasamos por paramentro

    segundo console log: CORRECTO: "JS rocks!" y TRUE

    tercer console log: CORRECTO: Objeto y FALSE

    cuarto console log: INCORRECTO:100 y TRUE 
                        CORRECTO: 100 y False ya que en el argument seria undefined
*/
f("JS rocks!", { b: "b" });
```

## Apartado B

¿Y con estos argumentos?

```javascript
/*
    primer console log: INCORRECTO: 2 ya que el primer argumento seria null 
                        CORRECTO: 1 ya que solo pasamos 1 argumento
                        
    segundo console log: CORRECTO: seria undefined y TRUE

    tercer console log: INCORRECTO: OBJETO, FALSE
                        CORRECTO: OBJETO, TRUE -> Ya que en este caso no hacemos destructuring y arguments coje el mismo espacio de memoria del objeto

    cuarto console log: INCORRECTO: seria 100 true
                        CORRECTO: seria 100 false
*/
f({ b: "b" });
```

## Apartado C

¿Y ahora?

```javascript
// ERROR ya que no se puede hacer destructuring de null
f("JS sucks!", null, 13);
```

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
