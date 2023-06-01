import styles from './videoUploadPreview.module.css'
import { FaPencilAlt } from 'react-icons/fa'
import { RiEyeLine, RiDeleteBin6Line } from  'react-icons/ri'
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

export default VideoUploadPreview
