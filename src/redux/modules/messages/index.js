import { createAction, handleActions } from 'redux-actions';
import Firebase from 'firebase';

const MessagesRef = new Firebase('https://react-firebase-redux.firebaseio.com/').child('messages');

const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';

const messageReceived = createAction(
  MESSAGE_RECEIVED,
  (id, message) => ({
    id,
    ...message
  })
);

const syncMessages = () => {
  return (dispatch) => {
    MessagesRef.on('child_added', (childSnap) => {
      dispatch(messageReceived(childSnap.key(), childSnap.val()));
    });
  };
};

const sendMessage = (name, text) => {
  return () => {
    MessagesRef.push({
      name,
      text
    });
  };
};

export const actions = {
  syncMessages,
  sendMessage
};

export default handleActions({
  [MESSAGE_RECEIVED] : (state, { payload }) => {
    return [
      ...state,
      payload
    ];
  }
}, []);
