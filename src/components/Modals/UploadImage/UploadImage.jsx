import { useState, useRef, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AddButton from "../../AddButton/AddButton";
import design from "./UploadImage.module.css";
import Upload from "../../../assets/upload.png";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import UserContext from "../../../context/UserContext";
import { Web3Storage } from "web3.storage";
import { Modal, Button } from "@mui/material";

const UploadImage = ({
  handleShow,
  name,
  geekNftValue,
  address,
  studentId,
}) => {
  const { setImageData } = useContext(UserContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef(null);
  const [imageNft, setImageNft] = useState(null);
  const [tokenId, setTokenId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const navigate = useNavigate();

  const web3Storage = new Web3Storage({
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDc4NTIyMDIwMjE3ZjhmYzZFMWNFQzc1NWY5NEUwMzJCOWExNTZlOUQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODY3NzMzMDA3MjcsIm5hbWUiOiJHZWVrIn0.H27T4-t_pYWsTQmvYhq1NJxgT6A_1JkbgeSXwkD4sDU",
  });

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsHovered(false);
    const file = event.dataTransfer.files[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        setSelectedFile(file);
      }
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsHovered(true);
  };

  const handleDragLeave = () => {
    setIsHovered(false);
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    const fileInput = fileInputRef.current;
    const cid = await web3Storage.put(fileInput.files);
    const pathResult = fileInput.files[0].name;
    setModalContent("");

    setModalOpen(true);

    setImageNft(`https://${cid}.ipfs.w3s.link/${pathResult}`);

    const data = new FormData();
    data.append("image", selectedFile);
    data.append("studentId", studentId);
    try {
      if (imageNft == null) {
        setModalContent("Oops, try again network issue");
      } else {
        if (address == "0x0000000000000000000000000000000000000000") {
          setModalContent("Invalid wallet address");
        } else {
          if ((await geekNftValue.studentCertificateStatus(address)) == true) {
            alert("Oops!! Student has been certified");
          } else {
            await geekNftValue.sendCertificate(address, imageNft);
            const tokenId = (
              await geekNftValue.certificateTrack(address)
            ).toString();
            setTokenId(tokenId);
            console.log(tokenId);
            const response = await fetch(
              "https://lms-zwhm.onrender.com/api/v1/certificates/",
              {
                method: "POST",
                body: data,
                headers: {
                  "x-auth-token":
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDY3OThmOWViNjk4OTU0MzYzMWE0NTQiLCJpc0FkbWluIjp0cnVlLCJmaXJzdE5hbWUiOiJNYXJjIiwibGFzdE5hbWUiOiJCb2VobSIsImVtYWlsIjoibWFyYy5ib2VobUBleGFtcGxlLmNvbSIsInJvbGUiOiJhZG1pbiIsImF2YXRhclVybCI6Imh0dHBzOi8vYXBpLmRpY2ViZWFyLmNvbS81LngvY3Jvb2RsZXMtbmV1dHJhbC9zdmc_c2VlZD1tYXJjLWE3ZnVyLWJvZWhtLWlkaWI1LWV4YW1wbGUtYTdmdXItY29tJnNpemU9MjAwJnJhZGl1cz01MCIsInRvdGFsU2NvcmUiOjAsImhhc0NlcnRpZmljYXRlIjpmYWxzZSwidGl0bGUiOiJQcm9ncmFtIENvcmRpbmF0b3IiLCJjb2hvcnQiOiIyMDIyIiwiaWF0IjoxNjg3NTE0ODU5fQ.BDU1r0_7gKM-4YlwpQoetI-pqs9zIUuQzHEkDuxXneE",
                },
              }
            );

            if (response.ok) {
              const responseData = await response.json();
              setImageData(responseData);
              setModalContent("Certificate has been sent to Student");
              setTimeout(() => navigate(`/certificate/ImageRow/`));
            }
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={design.UploadVideo}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div></div>
        <HighlightOffIcon
          onClick={handleShow}
          style={{
            cursor: "pointer",
            color: "#292D32",
          }}
        />
      </div>
      <div
        className={`${design.upload} ${isHovered ? design.uploadHovered : ""}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <img src={Upload} alt="" />

        <p>
          Drag & drop or <span onClick={handleFileSelect}>choose file</span> to
          upload Certificate.
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleFileChange}
          />
          {selectedFile && (
            <div>
              <img
                src={imagePreview}
                style={{ width: "150px", height: "110px", marginTop: "10px" }}
                alt="Selected Image"
              />
            </div>
          )}
        </p>
      </div>

      <AddButton content="Save" onClick={handleUpload} />
      <Modal
        open={modalOpen}
        onClose={closeModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
          marginLeft: "120px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            width: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h2 id="modal-title" style={{ color: "white", textAlign: "center" }}>
            Upload Status
          </h2>
          <p id="modal-description">{modalContent}</p>
          <Button onClick={closeModal}>Close</Button>
        </div>
      </Modal>
    </div>
  );
};

export default UploadImage;
