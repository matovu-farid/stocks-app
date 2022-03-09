const FETCHCOMPANY = 'COMPANY/FETCH';
export const fetchCompany = (symbol) => async (dispatch) => {
  const url = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=9b6100842231c66b4c6c23e323384b39`;
  const payload = (await (await fetch(url)).json())[0];
  console.log(payload);
  dispatch({
    type: FETCHCOMPANY,
    payload,
  });
};

const companyReducer = (state = '', action) => {
  if (action.type === FETCHCOMPANY) {
    return action.payload;
  }
  return state;
};
export default companyReducer;
