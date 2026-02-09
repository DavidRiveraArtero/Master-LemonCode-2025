console.log(
  "%c\n************** CHALLENGE 03 *********************",
  "font-weight: bold; color: aquamarine; font-size: 24px",
);

const aplane = (...arr): number[] => {
  return arr.reduce<number[]>((acm, act) => {
    if (typeof act === "object") {
      aplane(...act);
    } else {
      console.log(act, "-----------------\n ");
      acm.push(act);
    }

    return acm;
  }, []);
};

const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

console.log(aplane(sample));
