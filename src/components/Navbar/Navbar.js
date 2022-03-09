import propTypes from 'prop-types';
import { useEffect } from 'react';
import { AiFillAudio } from 'react-icons/ai';
import { IoIosSettings, IoIosArrowBack } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import {
  useLocation, useNavigate,
} from 'react-router-dom';
import { clearCompany } from '../../redux/company/company';
import './Navbar.css';

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
    <div className="navbar">

      <IoIosArrowBack
        onClick={onClick}
        className="icon"
      />
      <div className="title">

        <p>{title}</p>
      </div>
      <div className="end">
        <AiFillAudio className="icon" />
        <IoIosSettings className="icon" />
      </div>

    </div>
  );
};
Navbar.propTypes = {
  title: propTypes.string.isRequired,
};
export default Navbar;
