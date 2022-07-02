import Car from './compoents/car';
import nameMaker from './utils/nameMaker';
import randomNumberMaker from './utils/randomNumberMaker';
import { isCarForward } from './utils/validation';

class RacingGame {
  nameInput: string;

  countInput: number;

  cars: Car[];

  randomNumbers: number[];

  constructor() {
    this.nameInput = '';
    this.countInput = 0;
    this.cars = [];
    this.randomNumbers = [];
  }

  start() {
    const carNames = nameMaker(this.nameInput);
    for (let i = 0; i < carNames.length; i++) {
      this.cars.push(new Car(carNames[i], 0));
    }
    console.log(this.cars);

    for (let i = 0; i < this.countInput; i++) {
      this.cars.map((car) => {
        if (isCarForward(randomNumberMaker())) {
          car.setCarForward(car.getCarForward() + 1);
          console.log(car.getCarForward());
        }
      });
    }
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
