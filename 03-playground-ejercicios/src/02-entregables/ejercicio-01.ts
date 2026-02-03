console.log(
  "%c\n************** DELIVERABLE 01 *********************",
  "font-weight: bold; color: aquamarine; font-size: 24px",
);

// GENERAL
interface Person {
  name: string;
  surname: string;
}

type ListItem = number | string | Person | object;

// ------Head-----
console.log("%c\HEAD", "font-weight: bold; color: green; font-size: 17px");
const head = ([first]: number[]): number => first;

const list_head: number[] = [4, 2, 3, 4];
let newHead = head([...list_head]);
console.log(newHead);

// ------Tail-----
console.log("%c\TAIL", "font-weight: bold; color: green; font-size: 17px");

const list_tail: ListItem[] = [
  5,
  "Hola",
  { name: "Juan", surname: "Perez" },
  6,
];

const tail = ([, ...others]: ListItem[]): ListItem[] => others;

let newListTail: ListItem[] = tail([...list_tail]);
console.log(newListTail);

// ------INIT-----
console.log("%c\INIT", "font-weight: bold; color: green; font-size: 17px");

const list_init: number[] = [9, 1, 2, 3];
const init = (array: number[]): number[] => array.slice(0, -1);

console.log(init(list_init));

// ------LAST-----
console.log("%cLAST", "font-weight: bold; color: green; font-size: 17px");
const list_last: ListItem[] = [
  0,
  "David",
  () => {
    console.log("Hola");
  },
  { name: "David", surname: "Rivera" },
];
const last = ([, ...others]: ListItem[]): ListItem[] => [
  others[others.length - 1],
];
let newList_last: ListItem[] = last(list_last);
console.log(newList_last);
