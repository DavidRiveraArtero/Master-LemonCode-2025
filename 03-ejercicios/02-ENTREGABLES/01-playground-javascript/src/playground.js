// Implementa una función `clone` que, a partir de un objeto de entrada `source` 
// devuelva un nuevo objeto con las propiedades de `source`:

// ------------------CLONE------------------

const target = {
    name: "David",
    surname: "Rivera",
    age:25
}

const source = {
    name: "Juan",
    city : {
        id: 1,
        city_name: "Barcelona"
    },
    friends: ["Pedro", "Santo"],
    age:35
}

const clone = (obj) => ({...obj})

// Implementa una función `merge` que, dados dos objetos de 
// entrada `source` y `target`, devuelva un nuevo objeto con todas las propiedades de `target` y de `source`,
//  y en caso de propiedades con el mismo nombre, `source` sobreescribe a `target`.

// ------------------MERGE------------------


const merge = (a,b) => ({...a, ...b})

newSource = merge({...target},{...source})
console.log(newSource === source)


