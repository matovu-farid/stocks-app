import propTypes from 'prop-types';
import './StockItem.css';

const StockItem = ({ companyName, price }) => (

  <li>
    <div>
      <p>{companyName}</p>
      <p>{price}</p>
    </div>
  </li>
);
StockItem.propTypes = {

  companyName: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
};
export default StockItem;
