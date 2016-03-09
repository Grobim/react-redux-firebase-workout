import { createAction, handleActions } from 'redux-actions';

export const CHANGE_NAME = 'CHANGE_NAME';

export const changeName = createAction(
  CHANGE_NAME,
  name => name
);

export const actions = {
  changeName
};

export default handleActions({
  [CHANGE_NAME] : (state, { payload }) => payload
}, '');
