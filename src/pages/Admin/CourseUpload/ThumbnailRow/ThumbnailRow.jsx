import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ThumbnailCard from '../../../../components/ThumbnailCard/ThumbnailCard';
import styles from './thumbnail.module.css';
import AddBTN from '../../../../components/AddBTN/AddBTN';
import AddWeek from '../../../../components/Modals/AddWeek/AddWeek';
import { useState, useContext } from 'react';
import UserContext from '../../../../context/UserContext';
import axios from 'axios'

function ThumbnailRow() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const { pathName } = useParams();
  const { courses } = useContext(UserContext);
  const [webData, setWebData] = useState([])

  
  useEffect(() => {
    axios("https://lms-zwhm.onrender.com/api/v1/thumbnails", {
      headers: {
         "Content-Type": "application/json" 
      },
      method: "GET",
    })
    .then(response => {
      console.log(response.data);
      setWebData(response.data.data);
    })}, [])
  
  


  console.log('web', webData)
   
  const frontend =  webData.filter((item) =>  item.learningTrack === "Frontend")
  const productDesign = webData.filter((item) =>  item.learningTrack === "Product design")
  const backend  = webData.filter((item) =>  item.learningTrack === "Backend")
  const web3  = webData.filter((item) =>  item.learningTrack === "Web 3")

  let data;
  if (pathName === 'Product design') {
    data = productDesign;
  } else if (pathName === 'Frontend') {
    data = frontend
  } else if (pathName === 'Backend') {
    data = backend;
  } else if (pathName === 'Web 3') {
    data = web3;
  }

  return (
    <div className={styles['thumbnail-row']}>
      <h1>
        {' '}
        <span onClick={() => navigate('/courses')}> Courses</span> &gt;{' '}
        {pathName}{' '}
      </h1>

      <section className={styles['thumbnails-container']}>
        {data.length !== 0
          ? data.map((item, index) => (
              <ThumbnailCard
                img={item.thumbnailUrl}
                courseTitle={item.courseTitle}
                timeFrame={item.week}
                key={index}
              />
            ))
          :  null 
          // setTimeout(() => navigate(`/courses/notAdded/${pathName}`), 1000)
        }
      </section>

      <AddBTN onClick={() => setIsVisible(true)} />
      {isVisible ? <AddWeek handleShow={() => setIsVisible(false)} /> : null}
    </div>
  );
}

export default ThumbnailRow;
