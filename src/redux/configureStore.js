import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import stocksReducer from './stocks/stocks';
import searchReducer from './search/search';
import searchStocksReducer from './stocks/search_stocks';
import snpReducer from './stocks/snp';

const reducer = combineReducers(
  {
    stocks: stocksReducer,
    search: searchReducer,
    searchStocks: searchStocksReducer,
    snp: snpReducer,
  },
);
const store = createStore(reducer, applyMiddleware(logger, thunk));
export default store;
