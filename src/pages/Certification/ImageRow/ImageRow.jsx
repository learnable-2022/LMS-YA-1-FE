import styles from "./ImageRow.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import ImageUploadPreview from "../../../components/ImageUploadPreview/imageUploadPreview";
import UserContext from "../../../context/UserContext";

function ImageRow() {
  const { imageData } = useContext(UserContext);
  const navigate = useNavigate();
  const { week } = useParams();

  return (
    <div className={styles["videos-row"]}>
      <h1>
        <span onClick={() => navigate("/certificate")}> certificate &gt; </span>
        &gt; {week}
      </h1>

      <article className={styles["videos-container-title"]}>
        <span className={styles["learning-material"]}>Image</span>
        <span className={styles["file-name"]}>File name</span>
        <span className={styles["date"]}>Date</span>
      </article>
      <section className={styles["videos-container"]}>
        {imageData && (
          <ImageUploadPreview
            imagePrev={URL.createObjectURL(imageData.image)}
            fileName={imageData.fileName}
            date={imageData.date}
          />
        )}
      </section>
    </div>
  );
}

export default ImageRow;
