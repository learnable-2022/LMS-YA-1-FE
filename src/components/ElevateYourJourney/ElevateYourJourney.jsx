import Button from "../Button/Button";
import elevateStyles from "./ElevateYourJourney.module.css";
import Elevate from "../../assets/elevatejourney.png";
import Card from "../Card/Card";
import cardImg from "../../assets/cardImg.png";
import cardImg2 from "../../assets/cardImg2.png";
import classnames from "classnames";

const ElevateYourJourney = () => {
  const card1Styles = {
    position: "absolute",
    top: "80px",
    left: "700px",
    transform: "rotate(10deg)",
  };
  const card2Styles = {
    position: "absolute",
    top: "200px",
    left: "1050px",
    transform: "rotate(-5deg)",
    backgroundColor: "#E3EFFF",
  };

  const mediaQueryCard1Styles = {
    display: "none",
  };
  const mediaQueryCard2Styles = {
    display: "none",
  };

  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const card1Class = classnames({
    [elevateStyles.card]: true,
    [elevateStyles.mobileCard1]: isMobile,
  });
  const card2Class = classnames({
    [elevateStyles.card]: true,
    [elevateStyles.mobileCard2]: isMobile,
  });

  return (
    <section className={elevateStyles.mainElevate}>
      <div className={elevateStyles["elevate-your-journey"]}>
        <div className={elevateStyles["elevate-your-journey-text"]}>
          <h2>Elevate Your Learning Journey with Unparalleled Features</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ut sapien vitae dui id eget.
            Egestas elit sit elementum nisi tortor lectus. Sit massa
            pellentesque et aliquet integer.
          </p>
          <Button
            content="Get started"
            customStyle={{ backgroundColor: "#0C4592", color: "#FFFFFF" }}
          />
        </div>
        <div className={elevateStyles["elevate-your-journey-img"]}>
          <img src={Elevate} className={elevateStyles.img} alt="" />
        </div>
      </div>
      <Card
        style={isMobile ? mediaQueryCard1Styles : card1Styles}
        imageSrc={cardImg}
        title="Instructor"
        cardText="Wow!! this is super easy to use and manage."
      />
      <Card
        style={isMobile ? mediaQueryCard2Styles : card2Styles}
        imageSrc={cardImg2}
        title="Design student"
        cardText="I’ve never seen such a well organized and detailed platform."
      />
    </section>
  );
};
export default ElevateYourJourney;
