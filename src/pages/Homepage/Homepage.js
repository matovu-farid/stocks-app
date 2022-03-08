import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/StockHeader/StockHeader';
import StockItem from '../../components/StockItem/StockItem';
import './Homepage.css';

const data = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 163.1700,
  },
  {
    symbol: 'NVDA',
    name: 'NVIDIA Corporation',
    price: 229.3600,
  },
  {
    symbol: 'AVGO',
    name: 'Broadcom Inc.',
    price: 595.9900,
  },
  {
    symbol: 'ADBE',
    name: 'Adobe Inc.',
    price: 452.1300,
  },
  {
    symbol: 'QCOM',
    name: 'QUALCOMM Incorporated',
    price: 162.2600,
  },
  {
    symbol: 'AMD',
    name: 'Advanced Micro Devices, Inc.',
    price: 108.4100,
  },
  {
    symbol: 'INTU',
    name: 'Intuit Inc.',
    price: 464.9500,
  },
  {
    symbol: 'AMAT',
    name: 'Applied Materials, Inc.',
    price: 125.7400,
  },
  {
    symbol: 'MU',
    name: 'Micron Technology, Inc.',
    price: 81.9100,
  },
  {
    symbol: 'ADI',
    name: 'Analog Devices, Inc.',
    price: 156.8500,
  },
  {
    symbol: 'LRCX',
    name: 'Lam Research Corporation',
    price: 525.7800,
  },
];

const snp = {
  symbol: '^GSPC',
  name: 'S&P 500',
  price: 4328.87000000,

};
const Homepage = () => (
  <div className="page">
    <Navbar title="companies" />
    <Header value={snp} />
    <div className="stocks">

      <h2>Stats By Country</h2>
      <ul className="stocklist">
        {
      data.map(({ symbol, name, price }) => (
        <StockItem
          key={symbol}
          symbol={symbol}
          name={name}
          price={price}
        />
      ))
    }
      </ul>
    </div>
  </div>
);
export default Homepage;
