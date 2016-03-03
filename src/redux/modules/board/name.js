import { createAction, handleActions } from 'redux-actions';

import BoardNameRef from 'firebase/board/name';

export const RECEIVE_BOARD_NAME = 'RECEIVE_BOARD_NAME';
export const CHANGE_DISPLAY_NAME = 'CHANGE_DISPLAY_NAME';
export const TOGGLE_EDIT_BOARD_NAME = 'TOGGLE_EDIT_BOARD_NAME';

export const syncBoardName = () => {
  return (dispatch) => {
    BoardNameRef.on('value', (res) => {
      dispatch(receiveBoardNameSuccess(res.val()));
    });
  };
};

export const receiveBoardNameSuccess = createAction(
  RECEIVE_BOARD_NAME,
  (name) => name
);

export const sendNewBoardName = (name) => {
  return (dispatch, getState) => {
    BoardNameRef.set(name);
    dispatch(toggleEditBoardName());
  };
};

export const changeDisplayName = createAction(
  CHANGE_DISPLAY_NAME,
  (name) => name
);

export const toggleEditBoardName = createAction(
  TOGGLE_EDIT_BOARD_NAME
);

export const actions = {
  syncBoardName,
  sendNewBoardName,
  toggleEditBoardName,
  changeDisplayName
};

export default handleActions({
  [RECEIVE_BOARD_NAME] : (state, { payload }) => {
    return Object.assign({}, state, {
      value  : payload,
      isSync : true
    });
  },
  [CHANGE_DISPLAY_NAME] : (state, { payload }) => {
    return Object.assign({}, state, {
      value : payload
    });
  },
  [TOGGLE_EDIT_BOARD_NAME] : (state) => {
    return Object.assign({}, state, {
      isEditing : !state.isEditing
    });
  }
}, {
  isSync : false
});
