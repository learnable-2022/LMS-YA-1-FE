import design from "./addButton.module.css";
import PropTypes from "prop-types";

const AddButton = ({ style, content, onClick, id }) => {
  return (
    <button id={id} style={style} className={design.Button} onClick={onClick}>
      {content}
    </button>
  );
};

AddButton.propTypes = {
  content: PropTypes.string.isRequired,
  style: PropTypes.object,
  id: PropTypes.object,
  onClick: PropTypes.func,
};

export default AddButton;
