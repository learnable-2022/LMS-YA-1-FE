import { useState, useRef, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AddButton from '../../AddButton/AddButton';
import design from './UploadImage.module.css';
import Upload from '../../../assets/upload.png';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import UserContext from '../../../context/UserContext';

const UploadImage = ({ handleShow, name }) => {
  const { setImageData } = useContext(UserContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef(null);

  const navigate = useNavigate();

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        setSelectedFile(file);
        console.log('Uploaded image:', file);
      } else {
        console.log('Please select an image file.');
      }
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsHovered(false);
    const file = event.dataTransfer.files[0];
    if (file) {
      if (file.type.startsWith('image/')) {
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

  const handleUpload = () => {
    const data = {
      image: selectedFile,
      date: new Date().toUTCString().slice(5, 16),
    };
    setImageData(data);
    setTimeout(() => navigate(`/certificate/${name}`), 10);
  };

  return (
    <div className={design.UploadVideo}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div></div>
        <HighlightOffIcon
          onClick={handleShow}
          style={{
            cursor: 'pointer',
            color: '#292D32',
          }}
        />
      </div>
      <div
        className={`${design.upload} ${isHovered ? design.uploadHovered : ''}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <img src={Upload} alt='' />

        <p>
          Drag & drop or <span onClick={handleFileSelect}>choose file</span> to
          upload Certificate.
          <input
            type='file'
            ref={fileInputRef}
            style={{ display: 'none' }}
            accept='image/*'
            onChange={handleFileChange}
          />
        </p>
      </div>{' '}
      <AddButton content='Save' onClick={handleUpload} />
    </div>
  );
};

export default UploadImage;
