import styles from './videosRow.module.css'
import VideoUploadPreview from '../../../components/VideoUploadPreview/VideoUploadPreview'
import VIDEOPREV from  '../../../assets/videoPreview.png'

function VideosRow() {
  return (
    <div className={styles['videos-row']}>
      <h1> <span> Courses &gt; Product Design </span> &gt;  week 1</h1>

      <nav>
         <span>videos</span>
         <span>Tasks</span>
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

      </section>
    </div>
  )
}

export default VideosRow