import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import stocksReducer from './stocks/stocks';

const reducer = combineReducers({ stocks: stocksReducer });
const store = createStore(reducer, applyMiddleware(logger, thunk));
export default store;
