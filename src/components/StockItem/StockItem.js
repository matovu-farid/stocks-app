import propTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCompany } from '../../redux/company/company';
import './StockItem.css';
import stockImage from './stocks.png';

const StockItem = ({ name, price, symbol }) => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.company);
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(fetchCompany(symbol));
  };
  useEffect(() => {
    if (Object.keys(data).length > 0) {
      navigate(`/${symbol}`);
    }
  }, [data]);
  return (

    <button type="button" onClick={onClick} className="button stockitem">

      <div>
        <p className="symbol">{symbol}</p>
      </div>
      <div className="info">
        <p className="name">{name}</p>
        <p className="price">{price}</p>
      </div>

      <div
        className="bg-image"
        style={{
          background: `url(${stockImage})  no-repeat center center`,

        }}
      />
    </button>

  );
};
StockItem.propTypes = {

  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  symbol: propTypes.string.isRequired,
};
export default StockItem;
