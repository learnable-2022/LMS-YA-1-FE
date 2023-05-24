import design from "./button.module.css";
import PropTypes from "prop-types";

const Button = ({ style, content, onClick }) => {
  return (
    <button style={style} className={design.Button} onClick={onClick}>
      {content}
    </button>
  );
};

Button.propTypes = {
  content: PropTypes.string.isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default Button;
