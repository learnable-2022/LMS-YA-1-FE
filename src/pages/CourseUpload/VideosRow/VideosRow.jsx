import styles from './videosRow.module.css'
import VideoUploadPreview from '../../../components/VideoUploadPreview/VideoUploadPreview'
import VIDEOPREV from  '../../../assets/videoPreview.png'
import { useParams, useNavigate } from 'react-router-dom';
import  productDesign from  '../../../data/productDesignVideo'
import AddBTN from '../../../components/AddBTN/AddBTN';

function VideosRow() {
  const navigate = useNavigate()
  const  { pathName } = useParams()



  let data;
  if(pathName === "Product design" ){
    data = productDesign
  }




  return (
    <div className={styles['videos-row']}>
      <h1> 
        <span onClick={() => navigate('/courses')} > Courses &gt;   </span> 
        <span onClick={() => navigate('/courses/thumbnail-row/' + pathName)}>{ pathName }</span> &gt;  week 1
      </h1>

      <nav>
         <span>videos</span>
      </nav>

      <article className={styles['videos-container-title']}>
        <span><input type="checkbox" /></span>
        <span className={styles['learning-material']}>Learning material</span>
        <span className={styles['file-name']}>File name</span>
        <span className={styles['date']}>Date</span>
      </article>

      <section className={styles['videos-container']}>
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

          {data?
            data.map((item, index) => 
                (<VideoUploadPreview videoPrev={item.videoPrev} fileName={item.fileName} date={item.date} key={index} />)
                ):
                setTimeout(() => navigate(`/courses/VideoNotAdded/${pathName}`) , 10)
          }
      </section>
      <AddBTN />
    </div>
  )
}

export default VideosRow