import { combineReducers } from 'redux';

import cardLists from './cardList';
import name from './name';

export default combineReducers({
  name,
  cardLists
});
