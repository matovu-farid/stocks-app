import './StockHeader.css';

const StockHeader = () => {
  const snp = {
    symbol: '^GSPC',
    name: 'S&P 500',
    price: 4328.87000000,

  };
  return (
    <div className="stock-header">
      <div>

        <h1>{snp.name}</h1>
      </div>
      <div className="info">
        <p className="snp-symbol">{snp.symbol}</p>

        <p>{snp.price}</p>
      </div>
    </div>
  );
};

export default StockHeader;
