import styles from './unAuthorized.module.css'
import { Link } from 'react-router-dom';
import NOTADDED from '../../assets/notAdded.png'


function unAuthorized() {

  return (
    <div className={styles['unAuth']}>

      <section className={styles['icon-section']}>
        <figure>
          <img src={NOTADDED} alt='icon' />
        </figure>
        <h1>OOPS! Looks like you do not have access to the Admin Page</h1>
        <Link to='/studentsDash'><p>Go back to the students page</p> </Link>
      </section>

    </div>
  );
}

export default unAuthorized;
