import propTypes from 'prop-types';
import { AiFillAudio } from 'react-icons/ai';
import { IoIosSettings, IoIosArrowBack } from 'react-icons/io';
import {
  useLocation, useNavigate,
} from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ title }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const onClick = () => {
    if (pathname === '/') return;
    navigate(-1);
  };
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
