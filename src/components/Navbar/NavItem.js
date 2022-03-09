import propTypes from 'prop-types';
import { AiFillAudio } from 'react-icons/ai';
import { IoIosArrowBack, IoIosSettings } from 'react-icons/io';

const NavItem = ({ onClick, title }) => (

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

NavItem.propTypes = {
  onClick: propTypes.func.isRequired,
  title: propTypes.string.isRequired,
};
export default NavItem;
