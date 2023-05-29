import design from "./navbar.module.css";
import LOGO from "../../assets/geek-logo.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={design.Navbar}>
      <img src={LOGO} alt="" />
      <Link to="/signup">
        <Button content="Get started" />
      </Link>
    </div>
  );
};

export default Navbar;
