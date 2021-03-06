import apikey from '../apikey';

const FETCHCOMPANY = 'COMPANY/FETCH';
const CLEARCOMPANY = 'COMPANY/CLEAR';
export const fetchCompany = (symbol) => async (dispatch) => {
  const url = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apikey}`;
  const payload = (await (await fetch(url)).json())[0];
  dispatch({
    type: FETCHCOMPANY,
    payload,
  });
};

export const clearCompany = () => ({
  type: CLEARCOMPANY,
});

const companyReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCHCOMPANY: return action.payload;
    case CLEARCOMPANY: return {};

    default: return state;
  }
};
export default companyReducer;
