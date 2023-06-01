import { useParams, useNavigate } from 'react-router-dom'
import ThumbnailCard from '../../../components/ThumbnailCard/ThumbnailCard'
import styles from './thumbnail.module.css'
import thumbnail from '../../../assets/designP.png'
import productDesign from '../../../data/productDesign'
import frontEnd from '../../../data/frontEnd'
import NotAdded from '../NotAdded/NotAdded'
function ThumbnailRow() {
  const navigate = useNavigate()
  const { pathName } = useParams()
  
  let data;
  if(pathName === "Product design" ){
    data = productDesign
  }else if (pathName === "Frontend"){
    data = frontEnd
  }

  return (
    <div className={styles['thumbnail-row']}>
        <h1> <span onClick={() => navigate('/courses')}> Courses</span> &gt; { pathName } </h1>

        <section className={styles['thumbnails-container']}>
           {data?
            data.map((item, index) => 
                (<ThumbnailCard img={item.img} courseTitle={item.courseTitle} timeFrame={item.timeFrame} key={index} />)
                ):
                setTimeout(() => navigate(`/courses/notAdded/${pathName}`) , 10)
           }
        </section>
    </div>
  )
}

export default ThumbnailRow
