const FETCHDATA = 'STOCKS/FETCH';

const url = 'https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=100&apikey=9b6100842231c66b4c6c23e323384b39';
export const fetchData = () => async (dispatch) => {
  const response = await fetch(url);
  const data = await response.json();
  const payload = data.map(({
    symbol, companyName: name, price,
  }) => ({
    symbol, name, price,
  }));
  dispatch({
    type: FETCHDATA,
    payload,
  });
};

const stocksReducer = (state = [], action) => {
  switch (action.type) {
    case FETCHDATA: return action.payload;
    default: return state;
  }
};
export default stocksReducer;
