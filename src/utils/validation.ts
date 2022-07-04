import { ERROR_MESSAGE, FORWARD_MIN_NUMBER } from '../constants';

const isNameLengthValid = (nameInputList: string[]): string[] => {
  nameInputList.map((name) => {
    if (name.length > 5) {
      alert(ERROR_MESSAGE.NAME_LENGTH_INVALID);
    }
  });
  return nameInputList;
};

const isInputNotNull = (nameInput: string | number | undefined): boolean => {
  if (nameInput === undefined) {
    alert(ERROR_MESSAGE.INPUT_NULL);
    return false;
  }
  return true;
};

const isCarForward = (randomNumber: number): boolean => {
  if (randomNumber >= FORWARD_MIN_NUMBER) {
    return true;
  }
  return false;
};

export { isNameLengthValid, isInputNotNull, isCarForward };
