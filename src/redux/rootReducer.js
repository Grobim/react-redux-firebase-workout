import { combineReducers } from 'redux';
import { routeReducer as router } from 'redux-simple-router';

import todos from 'redux/modules/todos';
import currentFilter from 'redux/modules/filter';

export default combineReducers({
  router,
  todos,
  currentFilter
});
