import design from "./dashboard_Card.module.css";
import PropTypes from "prop-types";

const Dashboard_Card = ({ icon, title, text, style, spanner, spanStyle }) => {
  return (
    <div className={design.Dashboard_Card} style={style}>
      <img src={icon} />
      <h4>{title}</h4>
      <h1>
        {text}
        <span className={spanStyle}>{spanner}</span>
      </h1>
    </div>
  );
};

Dashboard_Card.propTypes = {
  icon: PropTypes.object,
  spanStyle: PropTypes.object,
  title: PropTypes.string,
  spanner: PropTypes.string,
  text: PropTypes.object,
  style: PropTypes.object,
};

export default Dashboard_Card;
