import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { composeWithDevTools } from '@redux-devtools/extension';
import stocksReducer from './stocks/stocks';
import searchReducer from './search/search';
import searchStocksReducer from './stocks/search_stocks';
import snpReducer from './stocks/snp';
import companyReducer from './company/company';

const reducer = combineReducers(
  {
    stocks: stocksReducer,
    search: searchReducer,
    searchStocks: searchStocksReducer,
    snp: snpReducer,
    company: companyReducer,
  },
);
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
