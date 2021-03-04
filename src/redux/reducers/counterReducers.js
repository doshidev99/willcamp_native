import * as S from "../actionTypes";

export const counterReducers = (times = 0, action) => {
  switch (action.type) {
    case S.INCREMENT:
      return times + action.step;
    case S.DECREMENT:
      return times - action.step;
    default:
      return times;
  }
};
