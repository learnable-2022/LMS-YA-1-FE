import styles from "./footer.module.css";
import logo from "../../assets/geek-logo.png";
import fabook from "../../assets/fb-vector.png";
import tweep from "../../assets/tweet-vector.png";
import linkdn from "../../assets/linkedin-vector.png";
import Insta from "../../assets/Insta-vector.png";
import Button from "../UserJourney/JourneyComponents/Button/Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={styles["footer"]}>
      <section className={styles["section-1"]}>
        <img src={logo} alt="logo" />

        <div>
          <p>Redefining online education</p>
          <Link to="/signup">
            <Button
              text="Get Started"
              customStyle={{ backgroundColor: "#0C4592", color: "#FFFFFF" }}
            />
          </Link>
        </div>
      </section>
      <section className={styles["section-2"]}>
        <figure className={styles["icon-container"]}>
          <img
            src={fabook}
            alt="icon"
            className={styles["social-media-icon"]}
          />
          <img src={tweep} alt="icon" className={styles["social-media-icon"]} />
          <img src={Insta} alt="icon" className={styles["social-media-icon"]} />
          <img
            src={linkdn}
            alt="icon"
            className={styles["social-media-icon"]}
          />
        </figure>

        <div className={styles["legal-details-container"]}>
          <p className={styles["legal-details-1"]}>Terms of Service</p>
          <p className={styles["legal-details-2"]}>Privacy Policy</p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
