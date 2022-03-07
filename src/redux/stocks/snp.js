const FETCHDATA = 'SNP/FETCH';

const url = 'https://financialmodelingprep.com/api/v3/quote/%5EGSPC?apikey=9b6100842231c66b4c6c23e323384b39';
export const fetchData = () => async (dispatch) => {
  const response = await fetch(url);
  const {

    name, price, symbol,
  } = await response.json()[0];
  const payload = {
    name, price, symbol,
  };
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
