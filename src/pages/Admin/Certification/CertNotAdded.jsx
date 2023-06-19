import styles from "./CertNotAdded.module.css";
import NOTADDED from "../../../assets/notAdded.png";
import UploadImage from "../../../components/Modals/UploadImage/UploadImage";
import { useEffect, useState } from "react";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

function CertNotAdded({ name, geekNftValue }) {
  const [isVisible, setIsVisible] = useState(false);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://lms-zwhm.onrender.com/api/v1/users/username/@${name}`
        );
        const jsonData = await response.json();
        setAddress(jsonData.data.eth);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className={styles["not-added"]}>
      <section className={styles["icon-section"]}>
        <figure>
          <img src={NOTADDED} alt="icon" />
        </figure>
        <h1>OOPS! It’s Empty</h1>
        <p>Looks like you haven’t added any certificate yet...!!!!</p>
      </section>
      <div className={styles["upload-cont"]}>
        <button
          className={styles["upload-btn"]}
          onClick={() => setIsVisible(true)}
        >
          <FileUploadOutlinedIcon /> Upload certificate
        </button>
        {isVisible ? (
          <UploadImage
            handleShow={() => setIsVisible(false)}
            name={name}
            geekNftValue={geekNftValue}
            address={address}
          />
        ) : null}
      </div>
    </div>
  );
}

export default CertNotAdded;
