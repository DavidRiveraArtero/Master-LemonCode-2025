console.log(
  "%c\n************** CHALLENGE 04 *********************",
  "font-weight: bold; color: aquamarine; font-size: 24px",
);

const expensiveFunction = (props: Array<number>): number => {
  console.log("Una única llamada");

  return props.reduce((acc, acm) => (acm += acc));
};

const memoize = (func: Function): Function => {
  const cache = {};

  return (...props) => {
    if (cache[props.toString()]) {
      return cache[props.toString()];
    } else {
      const result = func(props);
      cache[props.toString()] = result;
      return result;
    }
  };
};

const memoized = memoize(expensiveFunction);
console.log(memoized(3, 3)); // Una única llamada // 3.1415
console.log(memoized(3, 3, 7)); // 3.1415
console.log(memoized(3, 2, 8)); // 3.1415
