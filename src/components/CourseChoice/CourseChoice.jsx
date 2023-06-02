import styles from './courseChoice.module.css'
import Button from '../Button/Button'
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

function CourseChoice({icon,  text, goTo}) {
  return (
    <div className={styles['courseChoice']}>
      <figure>
        <img src={icon} alt="icon" />
      </figure>

      <h1>{text}</h1>

      <Link to={goTo}>
        <Button
          content='Course'
        />
      </Link>
    </div>
  )
}

CourseChoice.propTypes = {
  goTo: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default CourseChoice
