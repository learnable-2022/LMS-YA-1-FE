import LOGO from "../../assets/geek-logo.png";
import design from "./dashnavbar.module.css";

const DashNavbar = () => {
  return (
    <div className={design.DashNavbar}>
      <img src={LOGO} />
    </div>
  );
};

export default DashNavbar;
