import { combineReducers } from 'redux';

import cardLists from './cardLists';
import name from './name';

export default combineReducers({
  name,
  cardLists
});
