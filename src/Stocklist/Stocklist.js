import propTypes from 'prop-types';
import StockItem from '../components/StockItem/StockItem';

const Stocklist = ({ data }) => (
  <ul className="stocklist">
    {
          data.map(({ symbol, companyName, price }) => (
            <StockItem
              key={symbol}
              symbol={symbol}
              name={companyName}
              price={price}
            />
          ))
}
  </ul>
);

Stocklist.propTypes = {
  data: propTypes.instanceOf(Object).isRequired,
};

export default Stocklist;
