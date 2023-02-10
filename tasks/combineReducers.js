import {combineReducers} from 'redux';
import {productDetailsReducer} from './reducer';

export const combinedReducers = combineReducers({
  productDetailsReducer,
});
