class RacingGame {
  nameInput: string;
  countInput: number;
  //   constructor(nameInput: string) {
  //     this.nameInput = nameInput;
  //   }

  start() {}
  getNameInputValue() {
    console.log(this.nameInput);
    return this.nameInput;
  }

  setNameInputValue(value: string) {
    this.nameInput = value;
    console.log(this.nameInput);
  }

  getCountInputValue() {
    console.log(this.countInput);
    return this.countInput;
  }

  setCountInputValue(value: number) {
    this.countInput = value;
    console.log(this.countInput);
  }
}

export default RacingGame;
