import styles from './notAdded.module.css';
import NOTADDED from '../../../assets/notAdded.png';
import AddBTN from '../../../components/AddBTN/AddBTN';

function NotAdded() {
  return (
    <div className={styles['not-added']}>
      <h1> <span> Courses</span> &gt; Product Design </h1>

      
      <section className={styles['icon-section']}>
        <figure>
          <img src={NOTADDED} alt="icon" />
        </figure>
          <h1>OOPS! It’s Empty</h1>
          <p>Looks like you haven’t added any course yet...!!!!</p>
      </section>
      
    <AddBTN />
    </div>
  )
}

export default NotAdded
