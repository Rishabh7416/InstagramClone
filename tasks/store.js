import {
  applyMiddleware,
  legacy_createStore as createStore,
  compose,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {combinedReducers} from './combineReducers';

let middleware = [thunkMiddleware];

const enhancer = compose(applyMiddleware(...middleware));

export const store = createStore(combinedReducers, enhancer);
