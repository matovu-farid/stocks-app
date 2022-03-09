import { useSelector } from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';
import './Details.css';
import StockHeader from '../../components/StockHeader/StockHeader';

const Detailspage = () => {
  const data = useSelector((state) => state.company);
  // const data = useSelector((state) => state.stocks).find((stock) => stock.symbol === symbol);
  return (
    <div className="page">
      <Navbar title="company details" />
      <StockHeader value={data} />
      <div className="details">

        <h2>Company Stats</h2>
        <ul className="details-list">
          {Object.keys(data).map((key) => {
            let name = key;
            if (key === 'companyName') {
              name = 'name';
            }
            return (
              <li className="details-item" key={key}>
                <span>{name}</span>
                <span>{data[key]}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Detailspage;
