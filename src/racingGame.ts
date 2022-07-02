import Car from './compoents/car';
import nameMaker from './utils/nameMaker';

class RacingGame {
  nameInput: string;

  countInput: number;

  cars: Car[];

  constructor() {
    this.nameInput = '';
    this.countInput = 0;
    this.cars = [];
  }

  start() {
    const carNames = nameMaker(this.nameInput);
    for (let i = 0; i < carNames.length; i++) {
      this.cars.push(new Car(carNames[i], 0));
    }
    console.log(this.cars);
  }

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
