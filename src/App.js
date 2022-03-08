import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Detailspage from './pages/Details/Details';
import Homepage from './pages/Homepage/Homepage';
import { fetchData } from './redux/stocks/stocks';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/:id" element={<Detailspage />} />
    </Routes>
  );
}

export default App;
