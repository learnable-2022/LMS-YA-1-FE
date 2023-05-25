import design from "./navbar.module.css";
import LOGO from "../../assets/geek-logo.png";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <div className={design.Navbar}>
      <img src={LOGO} alt="" />
      <Button content="Get started" />
    </div>
  );
};

export default Navbar;
