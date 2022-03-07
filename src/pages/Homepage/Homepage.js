import StockItem from '../../components/StockItem';
import './Homepage.css';

const data = [
  {
    symbol: 'AAPL',
    companyName: 'Apple Inc.',
    price: 163.1700,
  },
  {
    symbol: 'NVDA',
    companyName: 'NVIDIA Corporation',
    price: 229.3600,
  },
  {
    symbol: 'AVGO',
    companyName: 'Broadcom Inc.',
    price: 595.9900,
  },
  {
    symbol: 'ADBE',
    companyName: 'Adobe Inc.',
    price: 452.1300,
  },
  {
    symbol: 'QCOM',
    companyName: 'QUALCOMM Incorporated',
    price: 162.2600,
  },
  {
    symbol: 'AMD',
    companyName: 'Advanced Micro Devices, Inc.',
    price: 108.4100,
  },
  {
    symbol: 'INTU',
    companyName: 'Intuit Inc.',
    price: 464.9500,
  },
  {
    symbol: 'AMAT',
    companyName: 'Applied Materials, Inc.',
    price: 125.7400,
  },
  {
    symbol: 'MU',
    companyName: 'Micron Technology, Inc.',
    price: 81.9100,
  },
  {
    symbol: 'ADI',
    companyName: 'Analog Devices, Inc.',
    price: 156.8500,
  },
  {
    symbol: 'LRCX',
    companyName: 'Lam Research Corporation',
    price: 525.7800,
  },
];
const Homepage = () => (
  <ul>
    {
      data.map(({ symbol, companyName, price }) => (
        <StockItem
          key={symbol}
          companyName={companyName}
          price={price}
        />
      ))
    }
  </ul>
);
export default Homepage;
