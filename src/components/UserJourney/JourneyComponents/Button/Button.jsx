import styles from "./button.module.css";
import PropTypes from "prop-types";

function Button({ text, customStyle }) {
  return (
    <button style={customStyle} className={styles["btn"]}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  CustomStyle: PropTypes.object,
};

export default Button;
