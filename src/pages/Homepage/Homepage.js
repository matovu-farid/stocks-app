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
];
const Homepage = () => (
  <ul>
    {
      data.map(({ symbol, companyName, price }) => (
        <li key={symbol}>
          <div>
            <p>{symbol}</p>
            <p>{companyName}</p>
            <p>{price}</p>
          </div>
        </li>
      ))
    }
  </ul>
);
export default Homepage;
