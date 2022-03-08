import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Detailspage from './pages/Details/Details';
import Homepage from './pages/Homepage/Homepage';
import { innitateSearch } from './redux/stocks/search_stocks';
import { fetchData } from './redux/stocks/stocks';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.stocks);
  useEffect(() => {
    dispatch(innitateSearch(data));
  }, [data]);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/:symbol" element={<Detailspage />} />
    </Routes>
  );
}

export default App;
