console.log(
  "%c\n************** DELIVERABLE 03 *********************",
  "font-weight: bold; color: aquamarine; font-size: 24px",
);

// GENERAL
interface Person {
  name: string;
  surname?: string;
  age?: number;
  country?: string;
  married?: boolean;
}

console.log("%c\Clone", "font-weight: bold; color: green; font-size: 17px");

const source: Person = {
  name: "Juan",
  surname: "Perez",
  age: 18,
};

function clone(source: Person): Person {
  return { ...source };
}

let newSource = clone(source);
console.log(newSource);

console.log("%c\Merge", "font-weight: bold; color: green; font-size: 17px");

const a: Person = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b: Person = { name: "Luisa", surname: "Rivera", age: 31, married: true };

function merge(source: Person, target: Person): Person {
  return { ...target, ...source };
}

const newPerson: Person = merge(a, b);
console.log(newPerson);
