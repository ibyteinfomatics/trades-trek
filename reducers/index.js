import { combineReducers } from 'redux';
import stocks from '../actions/stocks';
export const rootReducer = combineReducers({
  stockWrapper: stocks,
});

export default rootReducer;
