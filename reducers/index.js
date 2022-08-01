import { combineReducers } from 'redux';
import { FailedStocksReducer } from '../actions/failedOrder';
import { HoldingStocksReducer } from '../actions/holdingOrder';
import { OpenStocksReducer } from '../actions/openOrder';
import { SelectedStockReducer } from '../actions/setStock';
import stocks from '../actions/stocks';
import users from '../actions/users';
export const rootReducer = combineReducers({
  stockWrapper: stocks,
  userWrapper: users,
  holdingOrderWrapper:HoldingStocksReducer,
  selectedStockWrapper:SelectedStockReducer,
  openOrderWrapper:OpenStocksReducer,
  failedOrderWrapper:FailedStocksReducer

});

export default rootReducer;
