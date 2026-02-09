// GENERAL
interface MyObject {
  a: number;
  b: {
    c: null;
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

console.log(
  "%c\n Apartado A",
  "font-weight: bold; color: green; font-size: 13px",
);

const deepGet = <T>(obj: MyObject, arr?: Array<string>): T => {
  const [first, ...rest] = arr;
  if (rest.length === 0) {
    if (obj !== undefined) return obj[first];
  } else {
    obj = deepGet(obj[first] ?? undefined, rest);
  }

  return obj as T;
};

console.log(deepGet({ ...myObject }, ["b", "d", "f", "g"]));

console.log(
  "%c\n Apartado B",
  "font-weight: bold; color: green; font-size: 13px",
);

let myObjectDeepSet = {};

const deepSet = <T>(
  object: Object,
  value?: T,
  keys?: Array<string>,
): Object => {
  const [first, ...rest] = keys;
  if (rest.length === 0) {
    object[first] = value;
    return object;
  }

  object[first] ??= {};
  deepSet(object[first], value, rest);

  return object;
};
myObjectDeepSet = deepSet({ ...myObjectDeepSet }, 1, ["a", "b", "c"]);
console.log(myObjectDeepSet);
