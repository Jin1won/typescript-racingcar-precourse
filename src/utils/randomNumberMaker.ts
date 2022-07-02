import { Random } from '@woowacourse/mission-utils';

const randomNumberMaker = () => {
  return Random.pickNumberInRange(0, 9);
};

export default randomNumberMaker;
