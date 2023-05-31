import styles from './videosRow.module.css'

function VideosRow() {
  return (
    <div className={styles['videos-row']}>
      <h1> <span> Courses &gt; Product Design </span> &gt;  week 1</h1>
      <nav>
         <span>videos</span>
         <span>Tasks</span>
      </nav>
      <article className={styles['videos-container-title']}>
        <span><input type="checkbox" checked/></span>
        <span className={styles['learning-material']}>Learning material</span>
        <span className={styles['file-name']}>File name</span>
        <span>Date</span>
      </article>

      <section className={styles['videos-container']}>

      </section>
    </div>
  )
}

export default VideosRow