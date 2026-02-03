// GENERAL
interface MyObject {
  a: number;
  b: {
    c: undefined;
    d: {
      e: number;
      f: {
        g: string;
      };
    };
  };
}

const myObject: MyObject = {
  a: 1,
  b: {
    c: null,
    d: {
      e: 3,
      f: {
        g: "bingo",
      },
    },
  },
};

console.log(
  "%c\n************** CHALLENGE 02 *********************",
  "font-weight: bold; color: aquamarine; font-size: 24px",
);

const deepGet = (
  obj: MyObject,
  arr?: Array<string>,
  indx: number = 0,
): MyObject => {
  let newDeep: MyObject = obj;
  if (arr === undefined && indx === 0) {
    return obj;
  }
  return newDeep;
};

console.log(deepGet(myObject, ["a", "b"]));
