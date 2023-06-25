import { useParams, useNavigate } from "react-router-dom";
import styles from "./videoNotAdded.module.css";
import NOTADDED from "../../../../assets/notAdded.png";
import AddBTN from "../../../../components/AddBTN/AddBTN";
import UploadVideo from "../../../../components/Modals/UploadVideo/UploadVideo";
import { useState } from "react";

function NotAdded() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const { pathName, week } = useParams();

  return (
    <div className={styles["not-added"]}>
      <h1>
        <span onClick={() => navigate("/courses")}> Courses </span> &gt;
        <span onClick={() => navigate("/courses/thumbnail-row/" + pathName)}>
          {" "}
          {pathName}{" "}
        </span>{" "}
        &gt; {week}
      </h1>

      <section className={styles["icon-section"]}>
        <figure>
          <img src={NOTADDED} alt="icon" />
        </figure>
        <h1>OOPS! It’s Empty</h1>
        <p>Looks like you haven’t added any video yet...!!!!</p>
      </section>

      <AddBTN onClick={() => setIsVisible(true)} />
      {isVisible ? (
        <UploadVideo handleShow={() => setIsVisible(false)} />
      ) : null}
    </div>
  );
}

export default NotAdded;
