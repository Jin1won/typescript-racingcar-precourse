import { Random } from '@woowacourse/mission-utils';

const randomNumberMaker = (): number => {
  return Random.pickNumberInRange(0, 9);
};

export default randomNumberMaker;
