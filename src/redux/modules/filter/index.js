import { createAction, handleActions } from 'redux-actions';

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const setVisibilityFilter = createAction(
  SET_VISIBILITY_FILTER,
  filter => filter
);

export const actions = {
  setVisibilityFilter
};

export default handleActions({
  [SET_VISIBILITY_FILTER] : (state, { payload }) => {
    return payload;
  }
}, 'SHOW_ALL');
