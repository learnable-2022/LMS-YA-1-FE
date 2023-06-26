import styles from './videoUploadPreview.module.css';
import { RiEyeLine, RiDeleteBin6Line } from 'react-icons/ri';
import PropTypes from 'prop-types';
import AddBTN from '../AddBTN/AddBTN';

function VideoUploadPreview({ videoPrev, fileName, date, videoURL }) {
  return (
    <div className={styles['upload-card']}>
      <input type='checkbox' />
      {/* {<img src={videoPrev} alt='videoPreview' />} */}
      <video controls>
        <source src={URL.createObjectURL(videoPrev)} />
      </video>

      <section className={styles['file-name-container']}>
        <p className={styles['file-name']}>{fileName}</p>
        <div>
          <span>
            <RiEyeLine className={styles['icon']} />{' '}
            <a href={videoURL} target='_'>
              View
            </a>{' '}
          </span>
          <span>
            <RiDeleteBin6Line className={styles['icon']} /> <p>Remove</p>{' '}
          </span>
        </div>
      </section>
      <p className={styles['date']}>{date}</p>
    </div>
  );
}

VideoUploadPreview.propTypes = {
  videoPrev: PropTypes.object.isRequired,
  fileName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default VideoUploadPreview;
