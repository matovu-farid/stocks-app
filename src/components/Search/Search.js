import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToSearch } from '../../redux/search/search';
import { searchData } from '../../redux/stocks/search_stocks';
import './Search.css';

const Search = () => {
  const dispatch = useDispatch();
  const onSearch = (e) => {
    dispatch(addToSearch(e.target.value));
  };
  const searchText = useSelector((state) => state.search);
  const data = useSelector((state) => state.stocks);
  useEffect(() => {
    dispatch(
      searchData(data, searchText),
    );
  }, [searchText]);
  return (
    <input
      className="searchbar"
      placeholder="search ..."
      onChange={onSearch}
      value={searchText}
      type="text"
    />
  );
};

export default Search;
