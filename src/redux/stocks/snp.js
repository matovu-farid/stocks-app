import apikey from '../apikey';

const FETCHDATA = 'SNP/FETCH';

const url = `https://financialmodelingprep.com/api/v3/quote/%5EGSPC?apikey=${apikey}`;
export const fetchSnpData = () => async (dispatch) => {
  const response = await fetch(url);

  const payload = (await response.json())[0];

  dispatch({
    type: FETCHDATA,
    payload,
  });
};

const snpReducer = (state = [], action) => {
  switch (action.type) {
    case FETCHDATA: return action.payload;
    default: return state;
  }
};
export default snpReducer;
