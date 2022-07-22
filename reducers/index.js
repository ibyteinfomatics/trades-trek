import { combineReducers } from 'redux';
import stocks from '../actions/stocks';
import users from '../actions/users';
export const rootReducer = combineReducers({
  stockWrapper: stocks,
  userWrapper: users,
});

export default rootReducer;
