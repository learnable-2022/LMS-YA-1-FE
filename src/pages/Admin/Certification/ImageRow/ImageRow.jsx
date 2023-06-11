import styles from './ImageRow.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import ImageUploadPreview from '../../../../components/ImageUploadPreview/ImageUploadPreview';
import UserContext from '../../../../context/UserContext';

function ImageRow() {
  const { imageData } = useContext(UserContext);
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <div className={styles['videos-row']}>
      <h1>
        <span
          style={{ fontWeight: 'bold' }}
          onClick={() => navigate('/certificate')}
        >
          certificate
        </span>
      </h1>

      <article className={styles['videos-container-title']}>
        <span className={styles['learning-material']}>Image</span>
        <span className={styles['file-name']}>File name</span>
        <span className={styles['date']}>Date</span>
      </article>
      <section className={styles['videos-container']}>
        {imageData && (
          <ImageUploadPreview
            imagePrev={URL.createObjectURL(imageData.image)}
            fileName={imageData.fileName}
            date={imageData.date}
          />
        )}
      </section>
    </div>
  );
}

export default ImageRow;
