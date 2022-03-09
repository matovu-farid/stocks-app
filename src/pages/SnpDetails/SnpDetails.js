import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ItemList from '../../components/Itemlist/Itemlist';
import NavItem from '../../components/Navbar/NavItem';

const SnpDetails = () => {
  const data = useSelector((state) => state.snp);
  const navigate = useNavigate();
  return (
    <div className="page">

      <NavItem onClick={() => navigate(-1)} title="Snp 500 details" />
      <Header value={data} />
      <div className="details">

        <h2>Snp Stats</h2>
        <ItemList data={data} />
      </div>
    </div>
  );
};
export default SnpDetails;
