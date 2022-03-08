import { useSelector } from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/StockHeader/StockHeader';
import StockItem from '../../components/StockItem/StockItem';
import './Homepage.css';

const snp = {
  symbol: '^GSPC',
  name: 'S&P 500',
  price: 4328.87000000,

};
const Homepage = () => {
  const data = useSelector((state) => state.stocks);

  return (
    <div className="page">
      <Navbar title="companies" />
      <Header value={snp} />
      <div className="stocks">

        <h2>Stats By Country</h2>
        <ul className="stocklist">
          {data.map(({ symbol, companyName, price }) => (
            <StockItem
              key={symbol}
              symbol={symbol}
              name={companyName}
              price={price}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Homepage;
