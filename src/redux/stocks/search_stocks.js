const SEARCHSTOCKS = 'SEARCH/STOCKS';
const INNITIATE = 'SEARCH/INNITIATE';
export const searchData = (data, search) => ({
  type: SEARCHSTOCKS,
  payload: { data, search },
});
export const innitateSearch = (data) => ({
  type: INNITIATE,
  payload: data,
});
const searchStocksReducer = (state = [], action) => {
  switch (action.type) {
    case SEARCHSTOCKS: return action.payload.data.filter(({ companyName }) => companyName
      .toLowerCase()
      .includes(action.payload.search.toLowerCase()));
    case INNITIATE: return action.payload;
    default: return state;
  }
};

export default searchStocksReducer;
