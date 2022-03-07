import propTypes from 'prop-types';
import './StockItem.css';

const StockItem = ({ name, price, symbol }) => (

  <li className="stockitem">
    <div>
      <p className="symbol">{symbol}</p>
    </div>
    <div className="info">
      <p className="name">{name}</p>
      <p className="price">{price}</p>
    </div>
  </li>
);
StockItem.propTypes = {

  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  symbol: propTypes.string.isRequired,
};
export default StockItem;
