import styles from './videosRow.module.css';
import VideoUploadPreview from '../../../../components/VideoUploadPreview/VideoUploadPreview';
import { useParams, useNavigate } from 'react-router-dom';
import AddBTN from '../../../../components/AddBTN/AddBTN';
import UploadVideo from '../../../../components/Modals/UploadVideo/UploadVideo';
import { useState, useContext , useEffect } from 'react';
import UserContext from '../../../../context/UserContext';
import axios from 'axios'

function VideosRow() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const { pathName, week } = useParams();
  const { courses, title } = useContext(UserContext);
  const [videoData, setVideoData] = useState([])
  


  useEffect(() => {
    axios("https://lms-zwhm.onrender.com/api/v1/courses", {
      headers: {
         "Content-Type": "application/json" 
      },
      method: "GET",
    })
    .then(response => {
      console.log(response.data);
      setVideoData(response.data.data);
    })}, [])

    
    let data2 = []
    videoData.map(item => {
      if(item.learningTrack[0].charAt(0).toUpperCase() + item.learningTrack[0].slice(1) === pathName  
          && item.week === title.timeFrame
          && item.courseTitle === title.courseTitle
          ){
        data2.push(item)
      }
    })

  /*

  let data = [];
  if (pathName === 'Product design') {
    courses.productDesign.map((item) => {
      if (item.timeFrame === `week ${week}`) {
        data = item.videos;
      }
    });
  } else if (pathName === 'Frontend') {
    courses.frontend.map((item) => {
      if (item.timeFrame === `week ${week}`) {
        data = item.videos;
      }
    });
  } else if (pathName === 'Backend') {
    courses.backend.map((item) => {
      if (item.timeFrame === `week ${week}`) {
        data = item.videos;
      }
    });
  } else if (pathName === 'Web 3') {
    courses.web3.map((item) => {
      if (item.timeFrame === `week ${week}`) {
        data = item.videos;
      }
    });
  }

*/

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

          data2.length !== 0
            ? data2.map((item, index) => (
                <VideoUploadPreview
                  videoPrev={item.description}
                  fileName={item.videoURL}
                  date={item.courseTitle}
                  videoURL={item.videoUrl}
                  key={index}
                />
              ))
            : 
            null
            // setTimeout(() => navigate(`/courses/VideoNotAdded/${pathName}/${week}`), 10)
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
