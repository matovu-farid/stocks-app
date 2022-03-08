import { Route, Routes } from 'react-router-dom';
import './App.css';
import Detailspage from './pages/Details/Details';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/details" element={<Detailspage />} />
    </Routes>
  );
}

export default App;
