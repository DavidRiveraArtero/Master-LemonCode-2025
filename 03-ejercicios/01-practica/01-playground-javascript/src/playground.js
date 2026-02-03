function contact2() {
  return [...arguments].flat();
}


const newArray = contact2([1,2,3,4], [5,6,7], ["Hola", () => {}, {name:"David"}])
console.log(newArray)