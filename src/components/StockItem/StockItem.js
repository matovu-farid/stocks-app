import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './StockItem.css';

const StockItem = ({ name, price, symbol }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/${symbol}`);
  };
  return (

    <button type="button" onClick={onClick} className="button stockitem">

      <div>
        <p className="symbol">{symbol}</p>
      </div>
      <div className="info">
        <p className="name">{name}</p>
        <p className="price">{price}</p>
      </div>
    </button>
  );
};
StockItem.propTypes = {

  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  symbol: propTypes.string.isRequired,
};
export default StockItem;
