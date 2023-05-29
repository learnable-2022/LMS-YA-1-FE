import styles from './flowCard.module.css'
import PropTypes from "prop-types";

function FlowCard({number, journey, description}) {
  return (
    <div className={styles['flowCard']}>
        <p className={styles['number']}>{number}</p>
        <h1 className={styles['title']}>{journey}</h1>
        <p className={styles['description']}>{description}</p>
    </div>
  )
}


FlowCard.propTypes = {
  number: PropTypes.number.isRequired,
  journey: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FlowCard
