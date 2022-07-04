import { domSelector, domCreator } from '../utils/dom';
import Car from './car';

class GameResult {
  resultElement: HTMLDivElement;

  racingWinnersElement: HTMLSpanElement;

  racingWinners: string[];

  racingWinnersForward: number;

  constructor() {
    this.resultElement = domSelector('#result') as HTMLDivElement;
    this.racingWinnersElement = domSelector(
      '#racing-winners',
    ) as HTMLSpanElement;
    this.racingWinners = [];
    this.racingWinnersForward = 0;
  }

  createGameResultElement = (cars: Car[]): HTMLElement => {
    const newNode = domCreator('ul');
    newNode.style.padding = '0px';

    cars.map((car) => {
      const carNode = domCreator('li');
      carNode.style.listStyle = 'none';
      carNode.innerHTML = `${car.name}: ` + '-'.repeat(car.forward);
      newNode.appendChild(carNode);
    });

    return newNode;
  };

  addGameResultElement = (newNode: HTMLElement) => {
    this.resultElement.appendChild(newNode);
  };

  addFinalResult = (cars: Car[]) => {
    cars.map((car) => {
      this.racingWinnersForward = Math.max(
        this.racingWinnersForward,
        car.forward,
      );
    });

    cars.map((car) => {
      if (car.forward === this.racingWinnersForward) {
        this.racingWinners.push(car.name);
      }
    });

    this.racingWinnersElement.innerHTML = this.racingWinners.join(', ');
  };
}

export default GameResult;
