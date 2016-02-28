import { combineReducers } from 'redux';
import { routeReducer as router } from 'redux-simple-router';

import board from './modules/board';

export default combineReducers({
  router,
  board
});
