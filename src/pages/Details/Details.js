import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/StockHeader/StockHeader';
import './Details.css';

const data = {
  symbol: 'AAPL',
  companyName: 'Apple Inc.',
  marketCap: 2599680475136,
  sector: 'Technology',
  industry: 'Consumer Electronics',
  beta: 1.1855,
  price: 159.3000,
  lastAnnualDividend: 0.8800,
  volume: 97814516,
  exchange: 'Nasdaq Global Select',
  exchangeShortName: 'NASDAQ',
  country: 'US',
  isActivelyTrading: true,
};

const Detailspage = () => (
  <div className="page">
    <Navbar title="company details" />
    <Header value={data} />
    <div className="details">

      <h2>Company Stats</h2>
      <ul className="details-list">
        {
          Object.keys(data).map((key) => (
            <li className="details-item" key={data.symbol}>
              <span>{key}</span>
              <span>{data[key]}</span>
            </li>
          ))
    }
      </ul>
    </div>
  </div>
);
export default Detailspage;
