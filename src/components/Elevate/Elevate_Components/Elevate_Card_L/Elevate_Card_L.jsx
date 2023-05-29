import PropTypes from "prop-types";
import design from "./elevateCard.module.css";
import MENU from "../../../../assets/menu.png";

const Elevate_Card = ({ style, title, text }) => {
  return (
    <div style={style} className={design.Elevate_Card}>
      <img src={MENU} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

Elevate_Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default Elevate_Card;
