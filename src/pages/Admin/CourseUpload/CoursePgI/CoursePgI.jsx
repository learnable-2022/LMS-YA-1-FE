import styles from "./coursepgI.module.css";
import FRONTEND from "../../../../assets/frnt33.png";
import BACKEND from "../../../../assets/bnk33.png";
import PRODUCTD from "../../../../assets/prdt33.png";
import WEB3 from "../../../../assets/web33.png";
import CourseChoice from "../../../../components/CourseChoice/CourseChoice";

function CoursePgI() {
  return (
    <div
      className={styles["choices-page"]}
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <h1>Courses</h1>
      <section className={styles["choices-container"]}>
        <CourseChoice
          text="Frontend"
          icon={FRONTEND}
          goTo="/courses/thumbnail-row/Frontend"
        />
        <CourseChoice
          text="Backend"
          icon={BACKEND}
          goTo="/courses/thumbnail-row/Backend"
        />
        <CourseChoice
          text="Product Design"
          icon={PRODUCTD}
          goTo="/courses/thumbnail-row/Product design"
        />
        <CourseChoice
          text="Web 3"
          icon={WEB3}
          goTo="/courses/thumbnail-row/Web 3"
        />
      </section>
    </div>
  );
}

export default CoursePgI;
