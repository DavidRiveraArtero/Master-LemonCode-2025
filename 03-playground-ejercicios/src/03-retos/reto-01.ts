console.log(
  "%c\n************** CHALLENGE 01 *********************",
  "font-weight: bold; color: aquamarine; font-size: 24px",
);
/*
const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

const showMessage = async ([time, message]: [
  number,
  string,
]): Promise<void> => {
  await delay(time);
  console.log(message);
};

const triggers: Function[] = [
  async () => await showMessage([200, "third"]),
  async () => await showMessage([100, "second"]),
];

const run = (triggers) => {
  showMessage([300, "first"]);
  triggers.forEach((t: Function) => t());
};

run(triggers);
*/
