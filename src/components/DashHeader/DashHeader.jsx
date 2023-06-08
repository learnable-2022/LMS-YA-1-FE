import PropTypes from "prop-types";
import design from "./dashHeader.module.css";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ConnectButton from "../ConnectButton/ConnectButton";
const DashHeader = ({ img, name, position }) => {
  return (
    <div className={design.DashHeader}>
      <div className={design.DashHeader_divide}></div>
      <div className={design.DashHeader_right}>
        <NotificationsOutlinedIcon style={{ fontSize: "35px" }} />
        <img src={img} className={design.DashHeader_user} />
        <div>
          <h3>{name}</h3>
          <p>{position}</p>
        </div>
        <ConnectButton />
      </div>
    </div>
  );
};

DashHeader.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
};
export default DashHeader;
