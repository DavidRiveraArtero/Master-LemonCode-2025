export default {
  PRO: import.meta.env.VITE_PRO,
  DES: import.meta.env.VITE_DES,
  MODE: import.meta.env.MODE === "production",
};
