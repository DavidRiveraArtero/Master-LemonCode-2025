console.log(
  "%c\n************** DELIVERABLE 02 *********************",
  "font-weight: bold; color: aquamarine; font-size: 24px",
);
const arr1: number[] = [1, 2, 3, 4];
const arr2: number[] = [5, 6, 7];
const arr3: string[] = ["Hola"];

const concat = (arr1: number[], arr2: number[]): number[] => [...arr1, ...arr2];
const newArr: number[] = concat(arr1, arr2);

// OPCIONAL
const concat2 = <T>(...arg: T[][]): T[] => arg.flat();
console.log(
  "OPCIONAL\n",
  concat2<string | number>([...arr1], [...arr2], [...arr3]), // Si queremos aceptar cualquier posa ponemos unknown
);
