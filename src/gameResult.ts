import { domSelector } from './utils/dom';

class GameResult {
  result: HTMLDivElement;

  constructor() {
    this.result = domSelector('#result') as HTMLDivElement;
  }

  createGameResultElement = (cars: Car) => {
    let newNode = document.createElement('ul');
    newNode.style.paddingLeft = '10px';
    cars.map((car) => {
      let carNode = document.createElement('li');
      carNode.style.listStyle = 'none';
      carNode.innerHTML = `${car.name}: ` + '-'.repeat(car.forward);
      newNode.appendChild(carNode);
    });

    this.result.appendChild(newNode);
  };

  addGameResultElement = () => {};
  //   render(markup: string) {
  //     this.result.innerHTML = markup;
  //   }
}

export default GameResult;
