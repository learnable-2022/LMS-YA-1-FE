import { useState, useRef, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AddButton from '../../AddButton/AddButton';
import design from './uploadVideo.module.css';
import Upload from '../../../assets/upload.png';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import UserContext from '../../../context/UserContext';

const UploadVideo = ({ handleShow }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef(null);

  const { pathName, week } = useParams()
  const { courses } = useContext(UserContext)
  const navigate = useNavigate()

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

  if(pathName === "Frontend" ){
    courses.frontend.map((item) => {
        if(item.timeFrame === week){
          
        }
      })
  }
  


  const handleUpload = () => {
    const data = {videoPrev: selectedFile,  date: new Date().toUTCString().slice(5, 16)  }

    if(pathName === "Frontend" ){
      courses.frontend.map((item) => {
        if(item.timeFrame === week){
          data['fileName'] =  item.courseTitle + ".mp4"
          item.videos.push(data)
      }})
    }else if (pathName === 'Product design'){
      courses.productDesign.map((item) => {
        if(item.timeFrame === week){
          data['fileName'] =  item.courseTitle + ".mp4"
          item.videos.push(data)
      }})
    }else if(pathName === 'Backend'){
      courses.backend.map((item) => {
        if(item.timeFrame === week){
          data['fileName'] =  item.courseTitle + ".mp4"
          item.videos.push(data)
      }})
    }else if(pathName === "Web 3"){
      courses.web3.map((item) => {
        if(item.timeFrame === week){
          data['fileName'] =  item.courseTitle + ".mp4"
          item.videos.push(data)
      }})
    }
    setTimeout(() =>  navigate('/courses/videos-row/' + pathName + '/' + week), 10)
  }
  

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
      <AddButton content='Save' onClick={handleUpload} />{' '}
    </div>
  ) 
};

export default UploadVideo;
