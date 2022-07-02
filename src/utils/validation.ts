const isNameLengthValid = (nameInputList: string[]): string[] => {
  nameInputList.map((name) => {
    if (name.length > 5) {
      alert('자동차 이름을 5자 이하로 입력하세요.');
    }
  });
  return nameInputList;
};

export { isNameLengthValid };
