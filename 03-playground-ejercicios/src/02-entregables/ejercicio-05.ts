console.log(
  "%c\n************** DELIVERABLE 05 *********************",
  "font-weight: bold; color: aquamarine; font-size: 24px",
);
class SlotMachine {
  private coins: number;

  constructor() {
    this.coins = 0;
  }

  // Metodos
  public play(): void {
    this.pay();
    const pull: boolean = this.generatePull();
    this.generateResult(pull);
  }

  private pay(): void {
    this.coins++;
  }

  private generatePull(): boolean {
    let win: boolean = true;
    for (var x = 0; x < 3; x++) {
      const random = Math.round(Math.random() * 1);
      if (random === 0) {
        win = false;
      }
    }
    return win;
  }

  private generateResult(pull): void {
    pull
      ? [console.log(`You won ${this.coins} coins!!`), this.reset()]
      : console.log("Good luck next time!!");
  }

  private reset(): void {
    this.coins = 0;
  }
}

const game = new SlotMachine();
game.play();
game.play();
game.play();
game.play();
game.play();
