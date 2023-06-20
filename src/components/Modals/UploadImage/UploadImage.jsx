import { useState, useRef, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AddButton from "../../AddButton/AddButton";
import design from "./UploadImage.module.css";
import Upload from "../../../assets/upload.png";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import UserContext from "../../../context/UserContext";
import { Web3Storage } from "web3.storage";

const UploadImage = ({ handleShow, name, geekNftValue, address }) => {
  const { setImageData } = useContext(UserContext);
  const [imageNft, setImageNft] = useState(null);
  const [tokenId, setTokenId] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef(null);

  const web3Storage = new Web3Storage({
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDc4NTIyMDIwMjE3ZjhmYzZFMWNFQzc1NWY5NEUwMzJCOWExNTZlOUQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODY3NzMzMDA3MjcsIm5hbWUiOiJHZWVrIn0.H27T4-t_pYWsTQmvYhq1NJxgT6A_1JkbgeSXwkD4sDU",
  });

  const navigate = useNavigate();

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        setSelectedFile(file);
        console.log("Uploaded image:", file);
      } else {
        console.log("Please select an image file.");
      }
    }
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
    const fileInput = document.getElementById("file-to-upload");
    const cid = await web3Storage.put(fileInput.files);
    const pathResult = fileInput.files[0].name;

    setImageNft(`https://${cid}.ipfs.w3s.link/${pathResult}`);

    console.log(imageNft);
    console.log(geekNftValue);

    const data = {
      image: selectedFile,
      date: new Date().toUTCString().slice(5, 16),
    };
    setImageData(data);

    if (imageNft == null) {
      alert("Oops, try again");
    } else {
      if (address == "0x0000000000000000000000000000000000000000") {
        alert("Invalid wallet address");
      } else {
        await geekNftValue.sendCertificate(
          "0x9Fe6A1A762337f76305E0284F2caCE289eFCF7bc",
          imageNft
        );
        const tokenId = (
          await geekNftValue.certificateTrack(address)
        ).toString();
        setTokenId(tokenId);
        console.log(tokenId);
        // setTimeout(() => navigate(`/certificate/${name}`), 10);
        alert("Successful");
      }
    }
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
            id="file-to-upload"
            onChange={handleFileChange}
          />
        </p>
      </div>{" "}
      <AddButton content="Save" onClick={handleUpload} />
    </div>
  );
};

export default UploadImage;
