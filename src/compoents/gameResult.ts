import { domSelector, domCreator } from '../utils/dom';

class GameResult {
  result: HTMLDivElement;

  constructor() {
    this.result = domSelector('#result') as HTMLDivElement;
  }

  createGameResultElement = (cars: Car[]): HTMLElement => {
    const newNode = domCreator('ul');
    newNode.style.paddingLeft = '10px';

    cars.map((car) => {
      const carNode = domCreator('li');
      carNode.style.listStyle = 'none';
      carNode.innerHTML = `${car.name}: ` + '-'.repeat(car.forward);
      newNode.appendChild(carNode);
    });

    return newNode;
  };

  addGameResultElement = (newNode: HTMLElement) => {
    this.result.appendChild(newNode);
  };
}

export default GameResult;
