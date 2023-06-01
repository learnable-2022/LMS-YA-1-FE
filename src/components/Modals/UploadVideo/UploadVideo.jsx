import { useState, useRef } from 'react';
import AddButton from '../../AddButton/AddButton';
import design from './uploadVideo.module.css';
import Upload from '../../../assets/upload.png';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const UploadVideo = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef(null);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type.startsWith('video/')) {
        setSelectedFile(file);
        console.log('Uploaded video:', file);
      } else {
        console.log('Please select a video file.');
      }
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsHovered(false);
    const file = event.dataTransfer.files[0];
    if (file) {
      if (file.type.startsWith('video/')) {
        setSelectedFile(file);
        console.log('Dropped video:', file);
      } else {
        console.log('Please drop a video file.');
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

  return isVisible ? (
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
          onClick={handleClose}
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
          upload video.
          <input
            type='file'
            ref={fileInputRef}
            style={{ display: 'none' }}
            accept='video/*'
            onChange={handleFileChange}
          />
        </p>
      </div>{' '}
      {selectedFile && (
        <div>
          <p>{selectedFile.name}</p>
        </div>
      )}
      <AddButton content='Save' />{' '}
    </div>
  ) : null;
};

export default UploadVideo;
