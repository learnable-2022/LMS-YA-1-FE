import styles from './unAuthorized.module.css'
import { Link } from 'react-router-dom';
import NOTADDED from '../../assets/notAdded.png'
import GoBackBTN from '../../components/GoBackBTN/GoBackBTN';


function unAuthorized() {

  return (
    <div className={styles['unAuth']}>

      <section className={styles['icon-section']}>
        <figure>
          <img src={NOTADDED} alt='icon' />
        </figure>
        <h1>OOPS! Looks like you do not have access to the Requested Page</h1>
        <GoBackBTN />
      </section>

    </div>
  );
}

export default unAuthorized;
