import { useState } from 'react'
import styles from './accordion.module.css'
import PropTypes from "prop-types";

function Accordion({title, children}) {
  const [collapse, setCollapse] = useState(false)
  
  return (
    <div className={styles['accordion-wrapper']} onClick={() => setCollapse(!collapse)}>
        <section className={styles['section-1']} >
          <p>{title}</p>
          {
            collapse ? (<span>&uarr;</span>) : (<span>&darr;</span>)
          }
        </section>

        <section className={styles['section-2']}>
          {
            collapse ? children : null
          }
        </section>

      </div>
  )
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};

export default Accordion
