import styles from "./ImageUploadPreview.module.css";
import { RiEyeLine, RiDeleteBin6Line } from "react-icons/ri";
import PropTypes from "prop-types";

function ImageUploadPreview({ imagePrev, fileName, date }) {
  return (
    <div className={styles["upload-card"]}>
      <img
        src={imagePrev}
        alt="Uploaded Image"
        className={styles["image-preview"]}
      />
      {/* <p>File Name: {fileName}</p> */}
      <section className={styles["file-name-container"]}>
        <p className={styles["file-name"]}>{fileName}</p>
        <div>
          <span>
            <RiEyeLine className={styles["icon"]} /> <p>View</p>{" "}
          </span>
          <span>
            <RiDeleteBin6Line className={styles["icon"]} /> <p>Remove</p>{" "}
          </span>
        </div>
      </section>
      <p className={styles["date"]}>{date}</p>
    </div>
  );
}

ImageUploadPreview.propTypes = {
  imagePrev: PropTypes.string.isRequired,
  fileName: PropTypes.string,
  date: PropTypes.string.isRequired,
};

export default ImageUploadPreview;
