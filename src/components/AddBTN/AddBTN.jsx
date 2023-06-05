import styles from "./addBTN.module.css";
import PropTypes from "prop-types";

const AddBTN = ({ onClick }) => {
  return (
    <button className={styles.Button} onClick={onClick}>
      &#43;
    </button>
  );
};

AddBTN.propTypes = {
  onClick: PropTypes.func,
};

export default AddBTN;
