import PropTypes from "prop-types";
import design from "./dashHeader.module.css";
const DashHeader = ({ img, name, position }) => {
  return (
    <div className={design.DashHeader}>
      <div className={design.DashHeader_divide}></div>
      <div className={design.DashHeader_right}>
        <img src="" alt="bell" />
        <div>
          <h3>{name}</h3>
          <p>{position}</p>
        </div>
        <img src={img} className={design.DashHeader_user} />
      </div>
    </div>
  );
};

DashHeader.propTypes = {
  img: PropTypes.object,
  name: PropTypes.string,
  position: PropTypes.string,
};
export default DashHeader;
