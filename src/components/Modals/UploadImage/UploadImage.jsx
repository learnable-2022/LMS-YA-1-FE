import { useState, useRef, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AddButton from "../../AddButton/AddButton";
import design from "./uploadImage.module.css";
import Upload from "../../../assets/upload.png";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import UserContext from "../../../context/UserContext";
import { Web3Storage } from "web3.storage";

const UploadImage = ({ handleShow, name, geekNftValue, address }) => {
  const { setImageData } = useContext(UserContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef(null);
  const [imageNft, setImageNft] = useState(null);
  const [tokenId, setTokenId] = useState(null);

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
    if (file) {
      if (file.type.startsWith("image/")) {
        setSelectedFile(file);
        // console.log("Uploaded image:", file);
      } else {
        // console.log("Please select an image file.");
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
    const fileInput = fileInputRef.current;
    const cid = await web3Storage.put(fileInput.files);
    const pathResult = fileInput.files[0].name;

    setImageNft(`https://${cid}.ipfs.w3s.link/${pathResult}`);

    const data = {
      image: selectedFile,
      date: new Date().toUTCString().slice(5, 16),
    };

    if (imageNft == null) {
      // alert("Oops, try again");
    } else {
      if (address == "0x0000000000000000000000000000000000000000") {
        alert("Invalid wallet address");
      } else {
        await geekNftValue.sendCertificate(
          "0xC1b634853Cb333D3aD8663715b08f41A3Aec47cc",
          imageNft
        );
        const tokenId = (
          await geekNftValue.certificateTrack(address)
        ).toString();
        setTokenId(tokenId);
        console.log(tokenId);
        setTimeout(() => navigate(`/certificate/ImageRow/${name}`), 10);
      }
    }
    setImageData(data);
    setTimeout(() => navigate(`/certificate/ImageRow/`), 10);
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
        </p>
      </div>{" "}
      <AddButton content="Save" onClick={handleUpload} />
    </div>
  );
};

export default UploadImage;
