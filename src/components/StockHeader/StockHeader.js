import propTypes from 'prop-types';
import './StockHeader.css';

const StockHeader = ({ value }) => (
  <div className="stock-header">
    <div>

      <img src={value.image} alt={value.companyName} />
    </div>
    <div className="info">
      <p className="snp-symbol">{value.symbol}</p>

      <p>{value.price}</p>
    </div>
  </div>
);

StockHeader.propTypes = {
  value: propTypes.instanceOf(Object).isRequired,
};

export default StockHeader;
