const ADDTOSEARCH = 'SEARCH/ADD';

export const addToSearch = (payload) => ({
  type: ADDTOSEARCH,
  payload,
});

const searchReducer = (state = '', action) => {
  if (action.type === ADDTOSEARCH) {
    return action.payload;
  }
  return state;
};
export default searchReducer;
