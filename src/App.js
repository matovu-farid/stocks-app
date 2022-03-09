import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Detailspage from './pages/Details/Details';
import Homepage from './pages/Homepage/Homepage';
import SnpDetails from './pages/SnpDetails/SnpDetails';
import { innitateSearch } from './redux/stocks/search_stocks';
import { fetchSnpData } from './redux/stocks/snp';
import { fetchData } from './redux/stocks/stocks';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.stocks);
  useEffect(() => {
    dispatch(innitateSearch(data));
  }, [data]);
  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchSnpData());
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/snp" element={<SnpDetails />} />
      <Route path="/details/:symbol" element={<Detailspage />} />
    </Routes>
  );
}

export default App;
