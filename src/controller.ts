import RacingGame from './racingGame';
import { domSelector, addEventListenerToTarget } from './utils/dom';

class Controller {
  racingGame: RacingGame;

  constructor(racingGame: RacingGame) {
    this.racingGame = racingGame;
    this.addEvent();
  }

  addEvent() {
    addEventListenerToTarget(
      domSelector('#car-names-input'),
      'input',
      this.handleNameInput.bind(this),
    );
    addEventListenerToTarget(
      domSelector('#car-names-submit'),
      'click',
      this.handleNameSubmit.bind(this),
    );
    addEventListenerToTarget(
      domSelector('#racing-count-input'),
      'input',
      this.handleCountInput.bind(this),
    );
    addEventListenerToTarget(
      domSelector('#racing-count-submit'),
      'click',
      this.handleCountSubmit.bind(this),
    );
  }

  handleNameInput = (e: Event) => {
    this.racingGame.setNameInputValue((e.target as HTMLInputElement).value);
  };

  handleNameSubmit = (e: Event) => {
    e.preventDefault();
    const nameInputValue = this.racingGame.getNameInputValue();

    if (!nameInputValue) return;
  };

  handleCountInput = (e: Event) => {
    this.racingGame.setCountInputValue(
      Number((e.target as HTMLInputElement).value),
    );
  };

  handleCountSubmit = (e: Event) => {
    e.preventDefault();
    const countInputValue = this.racingGame.getCountInputValue();

    if (!countInputValue) return;
  };
}

export default Controller;
