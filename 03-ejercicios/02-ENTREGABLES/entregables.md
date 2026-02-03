# Módulo 2 Lenguajes

## Ejercicios entregables

### 1. Array operations

#### Head

Implementa una función `head` (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

```js
const head = (/* array */) => {}; // Implementation here.

// SOLUCION
const head = ([first]) => first;

const list_head = [4, 2, 3, 4];
let newHead = head([...list_head]);
```

#### Tail

Implementa una función `tail` (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

```js
const tail = (/* array */) => {}; // Implementation here.

// SOLUCION
const list_tail = [5, "Hola", { name: "Juan", surname: "Perez" }, 6];

const tail = ([, ...others]) => others;

let newListTail = tail([...list_tail]);
```

#### Init

Implementa una función `init` (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

```js
const init = (/* array */) => {}; // Implementation here.

// SOLUCION
const list_init = [9, 1, 2, 3];
const init = (array) => array.slice(0, -1);
```

#### Last

Implementa una función `last` (inmutable), tal que, dado un array como entrada devuelva el último elemento.

```js
const last = (/* array */) => {}; // Implementation here.

// SOLUCION
const list_last = [
  0,
  "David",
  () => {
    console.log("Hola");
  },
  { name: "David", surname: "Rivera" },
];
const last = ([, ...others]) => [others[others.length - 1]];
let newList_last = last(list_last);
```

### 2. Concat

Implementa una función `concat` (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.

```js
const concat = (a, b) => {}; // Implementation here.

// SOLUCION
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const concat = (a, b) => [...a, ...b];

let newArray = concat([...arr1], [...arr2]);
```

#### Opcional

Implementa una nueva versión de `concat` donde se acepten múltiples arrays de entrada (más de 2). No utilices el método `Array.prototype.concat`.

```js
// SOLUCION
function contact2() {
  let contactArray = [];
  for (const element of arguments) {
    contactArray.push(...element);
  }
  return contactArray;
}

// ESTA ES UNA SOLUCIÓN MÁS LIMPIA
function contact2() {
  return [...arguments].flat();
}
```

### 3. Clone Merge

#### Clone

Implementa una función `clone` que, a partir de un objeto de entrada `source` devuelva un nuevo objeto con las propiedades de `source`:

```js
function clone(source) {
  // Implementation here.
}
// SOLUCION
const target = {
  name: "David",
  surname: "Rivera",
  age: 25,
};

const source = {
  name: "Juan",
  city: {
    id: 1,
    city_name: "Barcelona",
  },
  friends: ["Pedro", "Santo"],
  age: 35,
};
const clone = (obj) => ({ ...obj });
```

#### Merge

Implementa una función `merge` que, dados dos objetos de entrada `source` y `target`, devuelva un nuevo objeto con todas las propiedades de `target` y de `source`, y en caso de propiedades con el mismo nombre, `source` sobreescribe a `target`.

Por ejemplo, dados estos 2 objetos:

```js
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };
```

el resultado de mezclar `a` sobre `b` sería:

```js
merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
// SOLUCION
const merge = (a, b) => ({ ...a, ...b });

newSource = merge({ ...target }, { ...source });
```

### 4. Read Books

Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro.
Un libro es un objeto con `title` como string y `isRead` como booleano. En caso de no existir el libro devolver `false`
TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.

```js
function isBookRead(books, titleToSearch) {
  // Implementation here
}
```

#### Ejemplo

```js
const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
```

#### Opcional

Utiliza Typescript para añadir los tipos adecuados.

### 5. Slot Machine

El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un **contador de monedas** que automáticamente se irá incrementando conforme vayamos jugando.

Cuando se llame al **método play** el número de monedas se debe incrementar de forma automática y debe generar **tres booleanos aleatorios** que representarán el estado de las 3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean `true`, y por tanto deberá mostrarse por consola el mensaje:

```js
"Congratulations!!!. You won <número de monedas> coins!!";
```

y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina.
En caso contrario deberá mostrar otro mensaje:

```js
"Good luck next time!!".
```

#### Ejemplo de uso

```js
class SlotMachine {
  /* ... */
}

const machine1 = new SlotMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
```
