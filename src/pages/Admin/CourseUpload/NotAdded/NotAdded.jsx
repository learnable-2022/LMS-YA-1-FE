import { useParams, useNavigate } from "react-router-dom";
import styles from "./notAdded.module.css";
import NOTADDED from "../../../../assets/notAdded.png";
import AddBTN from "../../../../components/AddBTN/AddBTN";
import AddWeek from "../../../../components/Modals/AddWeek/AddWeek";
import { useState } from "react";

function NotAdded() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const { pathName } = useParams();

  return (
    <div className={styles["not-added"]}>
      <h1>
        {" "}
        <span onClick={() => navigate("/courses")}> Courses</span> &gt;{" "}
        {pathName}{" "}
      </h1>

      <section className={styles["icon-section"]}>
        <figure>
          <img src={NOTADDED} alt="icon" />
        </figure>
        <h1>OOPS! It’s Empty</h1>
        <p>Looks like you haven’t added any course yet...!!!!</p>
      </section>

      <AddBTN onClick={() => setIsVisible(true)} />
      {isVisible ? <AddWeek handleShow={() => setIsVisible(false)} /> : null}
    </div>
  );
}

export default NotAdded;
