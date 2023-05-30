import design from "./hero.module.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import RIGHT from "../../assets/H-BG-Combo.png";
function Hero() {
  return (
    <div className={design.Hero_wrapper}>
      <div className={design.Margin}></div>
      <div className={design.Hero_inner}>
        <div className={design.Hero_left}>
          <h1 className="">Redefining Online Education.</h1>
          <p className="">
            Experience the future of Online Education with Seamless Teachings
            and Engaging Learning on a Single All-In-One Platform with{" "}
            <span>Geek</span> .
          </p>
          <Link to="/signup">
            <Button content="Get started" />
          </Link>
        </div>
        <div className={design.Hero_right}>
          <img src={RIGHT} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
