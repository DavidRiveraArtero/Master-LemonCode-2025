import styles from "./index.module.css";
import env from "./env";

const { MODE, PRO, DES } = env;

let userName: string = "David";
const h1 = document.createElement("h1");
const body = document.getElementById("hola");
body.classList.add(styles.color_gray);

if (body) {
  body.appendChild(h1);
}
h1.innerText = `Welcome ${userName}`;
h1.classList.add(styles.color_h1);

const h2 = document.createElement("h2");
document.body.appendChild(h2);
h2.innerHTML = MODE ? PRO : DES;
