const isNameLengthValid = (nameInputList: string[]): string[] => {
  nameInputList.map((name) => {
    if (name.length > 5) {
      alert('자동차 이름을 5자 이하로 입력하세요.');
    }
  });
  return nameInputList;
};

const isInputNotNull = (nameInput: string | number | undefined) => {
  if (nameInput === undefined) {
    alert('인풋을 입력하세요.');
    return false;
  }
  return true;
};

const isCarForward = (randomNumber: number) => {
  if (randomNumber >= 4) {
    return true;
  }
  return false;
};

export { isNameLengthValid, isInputNotNull, isCarForward };
