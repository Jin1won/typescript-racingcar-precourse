import RacingGame from './racingGame';
import GameResult from './gameResult';
import { domSelector, addEventListenerToTarget } from './utils/dom';
import nameMaker from './utils/nameMaker';
import { isInputNotNull, isNameLengthValid } from './utils/validation';

class Controller {
  racingGame: RacingGame;

  gameResult: GameResult;

  constructor(racingGame: RacingGame, gameResult: GameResult) {
    this.racingGame = racingGame;
    this.gameResult = gameResult;
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
    if (!isInputNotNull(nameInputValue)) return;

    const nameInputList = nameMaker(nameInputValue);
    if (!isNameLengthValid(nameInputList)) return;
  };

  handleCountInput = (e: Event) => {
    this.racingGame.setCountInputValue(
      Number((e.target as HTMLInputElement).value),
    );
  };

  handleCountSubmit = (e: Event) => {
    e.preventDefault();
    const countInputValue = this.racingGame.getCountInputValue();
    if (!isInputNotNull(countInputValue)) return;

    this.racingGame.start();
    this.gameResult.createGameResultElement(this.racingGame.cars);
  };
}

export default Controller;
