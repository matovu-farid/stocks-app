import propTypes from 'prop-types';
import { AiFillAudio } from 'react-icons/ai';
import { IoIosSettings, IoIosArrowBack } from 'react-icons/io';
import './Navbar.css';

const Navbar = ({ title }) => (
  <div className="navbar">
    <IoIosArrowBack className="icon" />
    <div className="title">

      <p>{title}</p>
    </div>
    <div className="end">
      <AiFillAudio className="icon" />
      <IoIosSettings className="icon" />
    </div>

  </div>
);
Navbar.propTypes = {
  title: propTypes.string.isRequired,
};
export default Navbar;
