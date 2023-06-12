import PropTypes from "prop-types";
import design from "./dashHeader.module.css";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ConnectButton from "../ConnectButton/ConnectButton";

const DashHeader = ({ img, name, position, style, WebHandler, account }) => {
  return (
    <div className={design.DashHeader} style={style}>
      <div className={design.DashHeader_divide}></div>
      <div className={design.DashHeader_right}>
        <NotificationsOutlinedIcon style={{ fontSize: "35px" }} />

        <img src={img} className={design.DashHeader_user} />
        <div>
          <h3>{name}</h3>
          <p>{position}</p>
        </div>
        <ConnectButton WebHandler={WebHandler} account={account} />
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
