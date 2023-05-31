import styles from './thumbnailCard.module.css'
import { FaPencilAlt } from 'react-icons/fa'

function ThumbnailCard({img, timeFrame, courseTitle  }) {
  return (
    <div className={styles['thumbnail-card']}>
      <figure>
        <img src={img} alt="thumbnail" />
      </figure>

      <section>
        <p className={styles['time-frame']}>{timeFrame}</p>
        <span> <FaPencilAlt />  Edit </span>
      </section>

      <h1>{courseTitle}</h1>
      
        <button> <span>&#43;</span> Add videos</button>
  
    </div>
  )
}

export default ThumbnailCard
