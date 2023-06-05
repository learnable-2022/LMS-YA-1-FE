import styles from './thumbnailCard.module.css'
import { FaPencilAlt } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

function ThumbnailCard({img, timeFrame, courseTitle  }) {
  const navigate = useNavigate()
  const { pathName }  = useParams()

  const addVideos = () => {
    navigate('/courses/videos-row/' + pathName + '/' + timeFrame)
  }
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
        <button onClick={addVideos}> <span>&#43;</span> Add videos</button>
    </div>
  )
}

ThumbnailCard.propTypes  = {
  img: PropTypes.string.isRequired,
  timeFrame: PropTypes.string.isRequired,
  courseTitle: PropTypes.string.isRequired
}

export default ThumbnailCard
