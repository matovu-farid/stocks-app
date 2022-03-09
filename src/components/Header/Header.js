import propTypes from 'prop-types';
import './Header.css';

const Header = ({ value }) => (
  <div className="stock-header">
    <div>

      <h1>{value.name}</h1>
    </div>
    <div className="info">
      <p className="snp-symbol">{value.symbol}</p>

      <p>{value.price}</p>
    </div>
  </div>
);

Header.propTypes = {
  value: propTypes.instanceOf(Object).isRequired,
};

export default Header;
