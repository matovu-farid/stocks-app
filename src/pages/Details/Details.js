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
      <Header value={{ ...data, name: data.companyName }} />
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
