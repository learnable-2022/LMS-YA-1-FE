import styles from './coursepgI.module.css'
import FRONTEND from "../../../assets/frnt33.png"
import BACKEND from "../../../assets/bnk33.png"
import PRODUCTD from "../../../assets/prdt33.png"
import WEB3 from "../../../assets/web33.png"
import CourseChoice from "../../../components/CourseChoice/CourseChoice";

function CoursePgI() {
  return (
    <div className={styles['choices-page']}>
      <h1>Courses</h1>
      <section className={styles['choices-container']}>
          <CourseChoice text="Frontend" icon={FRONTEND} />
          <CourseChoice text="Backend" icon={BACKEND} />
          <CourseChoice text="Product Design" icon={PRODUCTD}/>
          <CourseChoice text="Web 3" icon={WEB3}/>
      </section>
    </div>
  )
}

export default CoursePgI
