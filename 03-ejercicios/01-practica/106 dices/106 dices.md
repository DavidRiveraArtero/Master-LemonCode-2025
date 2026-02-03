# Dices

Empleando el concepto de _closure_, emula el comportamiento de 2 dados.

Utiliza un _closure_ para almacenar el resultado de tirar 2 dados, y encapsula junto a estos datos, métodos que implementen la siguiente funcionalidad:

- Hacer reset, poner a `undefined` o `null` ambos resultados.
- Tirar los dados. **TIP**: Usa `Math.random()` para tiradas aleatorias.
- Imprimir el resultado por consola. Ten en cuenta lo siguiente:
  - Informa al usuario que debe tirar primero cuando corresponda.
  - Si saca doble 6, ¡dale un premio!

```javascript
/*let dice1 = undefined
let dice2 = undefined

const randomDice = () => {
    return Number((Math.random() * 6).toFixed(0))
}

function startNewGame(){
    dice1 = randomDice()
    dice2 = randomDice()
}

function printResult(){
    if(dice1 === undefined || dice2 === undefined){
        console.log("Tienes que tirar primero")
    }else if( dice1 + dice2 === 12)
        console.log("Has ganado el premio")
    else{
        console.log("Dice 1:", dice1, " Dice 2:", dice2)
    }
}

function reset(){
    dice1 = undefined
    dice2 = undefined
}

myGame = {
    newGame: startNewGame,
    printResult,
    reset
}

myGame.newGame()
myGame.printResult()
*/

const dice = (function mySuperGame() {
  let dado1,
    dado2 = null;

  const generateRandomNumber = () => (Math.random() * 6).toFixed();

  return {
    startGame: function () {
      dado1 = generateRandomNumber();
      dado2 = generateRandomNumber();
    },
    printResult: function () {
      dado1 && dado2
        ? dado1 + dado2 === 12
          ? console.log("Has Ganada")
          : console.log(`Dado1 ${dado1}, Dado2 ${dado2}`)
        : console.log("Tienes que tirar de nuevo");
    },
    reset: function () {
      dado1 = null;
      dado2 = null;
    },
  };
})();
```

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
