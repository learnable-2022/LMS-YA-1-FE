import styles from "./ImageRow.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ImageUploadPreview from "../../../../components/ImageUploadPreview/ImageUploadPreview";
import UserContext from "../../../../context/UserContext";
import DashHeader from "../../../../components/DashHeader/DashHeader";
import Sidebar from "../../../../layout/Sidebar/Sidebar";
import TEST from "../../../../assets/Tappi.png";

function ImageRow() {
  const { imageData } = useContext(UserContext);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const firstName = searchParams.get("firstName");
  const studentId = searchParams.get("studentId");

  const fileName = name || imageData?.image?.name || "";

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const response = await fetch(
          `https://lms-zwhm.onrender.com/api/v1/certificates/user/${studentId}`,
          {
            method: "GET",
          }
        );
        if (response.ok) {
          const data = await response.json();

          if (data && data.success && data.data) {
            const { certificateUrl } = data.data;
            setAvatarUrl(certificateUrl || "");
            setDate(new Date().toUTCString().slice(5, 16));
            setName(firstName);
          } else {
            console.error("Invalid data format or missing data");
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchImageUrl();
  }, [firstName, studentId]);

  return (
    <div className={styles["image-row"]}>
      <div className={styles.Students_inner}>
        <div className={styles.Students_body}>
          <Sidebar />
          <div className={styles.Students_main}>
            <DashHeader
              name="Tappi"
              position="Program Co-ordinator"
              img={TEST}
            />

            <h1
              data-aos="zoom-in"
              data-aos-duration="1000"
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
                marginLeft: "40px",
                marginTop: "20px",
              }}
              onClick={() => navigate("/certificate")}
            >
              Certificates
            </h1>

            <article className={styles["image-container-title"]}>
              <span className={styles["learning-material"]}>Image</span>
              <span className={styles["file-name"]}>File name</span>
              <span className={styles["date"]}>Date issued</span>
            </article>

            <section className={styles["image-container"]}>
              <ImageUploadPreview
                imagePrev={avatarUrl}
                fileName={fileName}
                date={date}
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageRow;
