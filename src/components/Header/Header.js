import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ value }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/snp');
  };
  return (
    <button type="button" onClick={onClick} className="stock-header button">
      <div>

        <h1>{value.name}</h1>
      </div>
      <div className="info">
        <p className="snp-symbol">{value.symbol}</p>

        <p>{value.price}</p>
      </div>
    </button>
  );
};

Header.propTypes = {
  value: propTypes.instanceOf(Object).isRequired,
};

export default Header;
