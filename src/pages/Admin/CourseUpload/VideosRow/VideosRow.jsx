import styles from './videosRow.module.css';
import VideoUploadPreview from '../../../../components/VideoUploadPreview/VideoUploadPreview';
import { useParams, useNavigate } from 'react-router-dom';
import AddBTN from '../../../../components/AddBTN/AddBTN';
import UploadVideo from '../../../../components/Modals/UploadVideo/UploadVideo';
import { useState, useContext } from 'react';
import UserContext from '../../../../context/UserContext';

function VideosRow() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const { pathName, week } = useParams();
  const { courses } = useContext(UserContext);

  let data;
  if (pathName === 'Product design') {
    courses.productDesign.map((item) => {
      if (item.timeFrame === week) {
        data = item.videos;
      }
    });
  } else if (pathName === 'Frontend') {
    courses.frontend.map((item) => {
      if (item.timeFrame === week) {
        data = item.videos;
      }
    });
  } else if (pathName === 'Backend') {
    courses.backend.map((item) => {
      if (item.timeFrame === week) {
        data = item.videos;
      }
    });
  } else if (pathName === 'Web 3') {
    courses.web3.map((item) => {
      if (item.timeFrame === week) {
        data = item.videos;
      }
    });
  }

  return (
    <div className={styles['videos-row']}>
      <h1>
        <span onClick={() => navigate('/courses')}> Courses &gt; </span>
        <span onClick={() => navigate('/courses/thumbnail-row/' + pathName)}>
          {pathName}
        </span>{' '}
        &gt; {week}
      </h1>

      <nav>
        <span>videos</span>
      </nav>

      <article className={styles['videos-container-title']}>
        <span>
          <input type='checkbox' />
        </span>
        <span className={styles['learning-material']}>Learning material</span>
        <span className={styles['file-name']}>File name</span>
        <span className={styles['date']}>Date</span>
      </article>

      <section className={styles['videos-container']}>
        {
          /*
        <VideoUploadPreview 
            videoPrev={VIDEOPREV} 
            fileName='Introduction-and-principles-of-design.mp4'
            date='25 May 2023'
            />
        <VideoUploadPreview 
            videoPrev={VIDEOPREV} 
            fileName='Introduction-and-principles-of-design.mp4'
            date='25 February 2023'
            />
            */

          data.length !== 0
            ? data.map((item, index) => (
                <VideoUploadPreview
                  videoPrev={item.videoPrev}
                  fileName={`${index + 1}. ` + item.fileName}
                  date={item.date}
                  key={index}
                />
              ))
            : setTimeout(
                () => navigate(`/courses/VideoNotAdded/${pathName}/${week}`),
                10
              )
        }
      </section>
      <AddBTN onClick={() => setIsVisible(true)} />
      {isVisible ? (
        <UploadVideo handleShow={() => setIsVisible(false)} />
      ) : null}
    </div>
  );
}

export default VideosRow;
