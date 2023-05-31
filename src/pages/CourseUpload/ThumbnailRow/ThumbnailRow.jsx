import ThumbnailCard from '../../../components/ThumbnailCard/ThumbnailCard'
import styles from './thumbnail.module.css'
import thumbnail from '../../../assets/designP.png'

function ThumbnailRow() {
  return (
    <div className={styles['thumbnail-row']}>
        <h1> <span> Courses</span> &gt; Product Design </h1>

        <section className={styles['thumbnails-container']}>
          <ThumbnailCard 
              img={thumbnail} 
              courseTitle='Principles of design and how to use them'
              timeFrame='week 1'
              />

                <ThumbnailCard 
              img={thumbnail} 
              courseTitle='Principles of design and how to use them'
              timeFrame='week 1'
              />

              <ThumbnailCard 
              img={thumbnail} 
              courseTitle='Principles of design and how to use them'
              timeFrame='week 1'
              />

              <ThumbnailCard 
              img={thumbnail} 
              courseTitle='Principles of design and how to use them'
              timeFrame='week 1'
              />

        </section>
    </div>
  )
}

export default ThumbnailRow
