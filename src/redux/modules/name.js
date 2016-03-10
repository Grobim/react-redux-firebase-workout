import { createAction, handleActions } from 'redux-actions';

const CHANGE_NAME = 'CHANGE_NAME';

const changeName = createAction(
  CHANGE_NAME,
  name => name
);

export const actions = {
  changeName
};

export default handleActions({
  [CHANGE_NAME] : (state, { payload }) => payload
}, '');
