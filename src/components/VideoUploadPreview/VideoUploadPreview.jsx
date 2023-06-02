import styles from './videoUploadPreview.module.css'
import { RiEyeLine, RiDeleteBin6Line } from  'react-icons/ri'
import PropTypes from 'prop-types'
import AddBTN from '../AddBTN/AddBTN'

function VideoUploadPreview({videoPrev, fileName, date }) {
  return (
    <div className={styles['upload-card']}>
      <input type="checkbox" />
      <img src={videoPrev} alt="videoPreview" />
      <section className={styles['file-name-container']}>
        <p className={styles['file-name']}>{fileName}</p>
        <div>
          <span><RiEyeLine className={styles['icon']} />  <p>View</p> </span>
          <span><RiDeleteBin6Line className={styles['icon']} /> <p>Remove</p>  </span>
        </div>
      </section>
      <p className={styles['date']}>{date}</p>
    </div>
  )
}

VideoUploadPreview.propTypes = {
  videoPrev: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

export default VideoUploadPreview
