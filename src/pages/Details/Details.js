import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/StockHeader/StockHeader';
import './Details.css';

const Detailspage = () => {
  const { symbol } = useParams();
  const data = useSelector((state) => state.stocks).find((stock) => stock.symbol === symbol);
  return (
    <div className="page">
      <Navbar title="company details" />
      <Header value={data} />
      <div className="details">

        <h2>Company Stats</h2>
        <ul className="details-list">
          {Object.keys(data).map((key) => (
            <li className="details-item" key={data.symbol}>
              <span>{key}</span>
              <span>{data[key]}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Detailspage;
