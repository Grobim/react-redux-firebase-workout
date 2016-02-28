import { createAction, handleActions } from 'redux-actions';

export const REQUEST_CARD_LIST = 'REQUEST_CARD_LIST';
export const RECEIVED_CARD_LIST = 'RECEIVED_CARD_LIST';

export const ADD_CARD_LIST = 'ADD_CARD_LIST';

let cardListIncrement = 0;
export const addCardList = createAction(
  ADD_CARD_LIST,
  (title) => {
    return {
      id : cardListIncrement++,
      title
    };
  }
);

export const actions = {
  addCardList
};

export default handleActions({
  [ADD_CARD_LIST] : (state, {payload}) => {
    return [...state, {
      id    : payload.id,
      title : payload.title,
      cards : []
    }];
  }
}, []);
