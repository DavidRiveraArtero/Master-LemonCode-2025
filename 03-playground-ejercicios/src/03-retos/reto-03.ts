console.log(
  "%c\n************** CHALLENGE 03 *********************",
  "font-weight: bold; color: aquamarine; font-size: 24px",
);

const aplane = (arr: any[]): number[] => {
  return arr.reduce<number[]>((acm, act) => {
    if (Array.isArray(act)) {
      acm.push(...aplane(act));
    } else {
      acm.push(act);
    }

    return acm;
  }, []);
};

const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]], [10]]]];

console.log(aplane(sample));
