import { useSelector } from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';
import './Details.css';
import StockHeader from '../../components/StockHeader/StockHeader';

const Detailspage = () => {
  const {
    companyName, image, symbol, price, ...data
  } = useSelector((state) => state.company);

  delete data.description;
  delete data.beta;
  delete data.defaultImage;
  delete data.isEtf;
  delete data.isAdr;
  delete data.isFund;
  delete data.isActivelyTrading;

  const filteredData = { symbol, ...data };
  // const data = useSelector((state) => state.stocks).find((stock) => stock.symbol === symbol);
  return (
    <div className="page">
      <Navbar title="company details" />
      <StockHeader value={{
        companyName, image, symbol, price,
      }}
      />
      <div className="details">

        <h2>Company Stats</h2>
        <ul className="details-list">
          {Object.keys(filteredData).map((key) => (
            <li className="details-item" key={key}>
              <span>{key}</span>
              <span>{filteredData[key]}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Detailspage;
