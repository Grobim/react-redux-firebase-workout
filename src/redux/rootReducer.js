import { combineReducers } from 'redux';
import { routeReducer as router } from 'redux-simple-router';

import name from 'redux/modules/name';
import messages from 'redux/modules/messages';

export default combineReducers({
  router,
  name,
  messages
});
