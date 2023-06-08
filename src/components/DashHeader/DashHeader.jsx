import PropTypes from 'prop-types';
import design from './dashHeader.module.css';
const DashHeader = ({ img, name, position, style }) => {
  return (
    <div className={design.DashHeader} style={style}>
      <div className={design.DashHeader_divide}></div>
      <div className={design.DashHeader_right}>
        <img src='' alt='bell' />
        <img src={img} className={design.DashHeader_user} />
        <div>
          <h3>{name}</h3>
          <p>{position}</p>
        </div>
      </div>
    </div>
  );
};

DashHeader.propTypes = {
  img: PropTypes.string,
  style: PropTypes.object,
  name: PropTypes.string,
  position: PropTypes.string,
};
export default DashHeader;
