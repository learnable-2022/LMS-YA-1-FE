import { useParams, useNavigate } from 'react-router-dom'
import ThumbnailCard from '../../../components/ThumbnailCard/ThumbnailCard'
import styles from './thumbnail.module.css';
import AddBTN from '../../../components/AddBTN/AddBTN';
import AddWeek from '../../../components/Modals/AddWeek/AddWeek'
import { useState, useContext } from 'react';
import UserContext from '../../../context/UserContext';



function ThumbnailRow() {
  const [isVisible, setIsVisible] = useState(false)
  const navigate = useNavigate()
  const { pathName } = useParams()
  const { courses } = useContext(UserContext)

  let data;
  if(pathName === "Product design" ){
    data = courses.productDesign
  }else if (pathName === "Frontend"){
    data = courses.frontend
  }else if(pathName === 'Backend'){
    data = courses.backend    
  }else if(pathName === "Web 3"){
    data = courses.web3
  }
  
  return (
    <div className={styles['thumbnail-row']}>
        <h1> <span onClick={() => navigate('/courses')}> Courses</span> &gt; { pathName } </h1>

        <section className={styles['thumbnails-container']}>
           {data.length !== 0?
            data.map((item, index) => 
                (<ThumbnailCard img={item.img} courseTitle={item.courseTitle} timeFrame={item.timeFrame} key={index} />)
                ):
                setTimeout(() => navigate(`/courses/notAdded/${pathName}`) , 10)
              
           }
        </section>

        <AddBTN onClick={() => setIsVisible(true)} />
        {isVisible ? <AddWeek handleShow={() => setIsVisible(false)}  /> : null }
    </div>
  )
}

export default ThumbnailRow
