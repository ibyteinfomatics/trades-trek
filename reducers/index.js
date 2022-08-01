import { combineReducers } from 'redux';
import { HoldingStocksReducer } from '../actions/holdingOrder';
import { SelectedStockReducer } from '../actions/setStock';
import stocks from '../actions/stocks';
import users from '../actions/users';
export const rootReducer = combineReducers({
  stockWrapper: stocks,
  userWrapper: users,
  holdingOrderWrapper:HoldingStocksReducer,
  selectedStockReducer:SelectedStockReducer
});

export default rootReducer;
