import { combineReducers } from 'redux';
import { routeReducer as router } from 'redux-simple-router';
import todos from 'redux/modules/todos';

export default combineReducers({
  router,
  todos
});
