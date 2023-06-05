import design from './button.module.css';
import PropTypes from 'prop-types';

const Button = ({ style, content, onClick, id }) => {
  return (
    <button id={id} style={style} className={design.Button} onClick={onClick}>
      {content}
    </button>
  );
};

Button.propTypes = {
  content: PropTypes.string.isRequired,
  style: PropTypes.object,
  id: PropTypes.object,
  onClick: PropTypes.func,
};

export default Button;
