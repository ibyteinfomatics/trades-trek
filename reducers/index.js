import { combineReducers } from 'redux';
import { HoldingStocksReducer } from '../actions/holdingOrder';
import stocks from '../actions/stocks';
import users from '../actions/users';
export const rootReducer = combineReducers({
  stockWrapper: stocks,
  userWrapper: users,
  holdingOrderWrapper:HoldingStocksReducer
});

export default rootReducer;
