import propTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  useLocation, useNavigate,
} from 'react-router-dom';
import { clearCompany } from '../../redux/company/company';
import './Navbar.css';
import NavItem from './NavItem';

const Navbar = ({ title }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const company = useSelector((state) => state.company);
  const dispatch = useDispatch();
  const onClick = () => {
    if (pathname === '/') return;
    dispatch(clearCompany());
  };
  useEffect(() => {
    if (pathname !== '/' && Object.keys(company).length === 0) {
      navigate(-1);
    }
  }, [company]);
  return (
    <NavItem onClick={onClick} title={title} />
  );
};
Navbar.propTypes = {
  title: propTypes.string.isRequired,
};
export default Navbar;
