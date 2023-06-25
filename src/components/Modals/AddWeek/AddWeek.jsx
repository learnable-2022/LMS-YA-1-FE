import { useState, useRef, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AddButton from '../../AddButton/AddButton';
import design from './addWeek.module.css';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import UserContext from '../../../context/UserContext';


const AddWeek = ( { handleShow }) => {
  const { pathName } = useParams();
  const { courses } = useContext(UserContext);
  const navigate = useNavigate()

  const token = JSON.parse(localStorage.getItem('token'))


  const [timeFrame, setTimeFrame] = useState("");
  const [courseTitle, setCourseTitle] = useState("");
  const [img, setImg] = useState("");
  const [image, setImage] = useState('')
  const fileInputRef = useRef(null);

  

  const handleThumbnailChange = (event) => {
    const file = event.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = () => {
      setImg(reader.result);
    };

    
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { timeFrame, img, courseTitle, videos: [] }
    
    const webdata = new FormData();
    webdata.append("week", timeFrame);
    webdata.append("image", image);
    webdata.append("learningTrack", pathName);
    webdata.append("courseTitle", courseTitle);


  const response = await fetch("https://lms-zwhm.onrender.com/api/v1/thumbnails", {
      method: "POST",
      headers: { 
        'x-auth-token': token
      },
      body: webdata,
    })
      .catch((error) => console.error(error))

    console.log(response)
    
    if(pathName === "Frontend"){
      courses.frontend.push(data)
    }else if (pathName === 'Product design'){
      courses.productDesign.push(data)
    }else if(pathName === 'Backend'){
      courses.backend.push(data)
    }else if(pathName === "Web 3"){
      courses.web3.push(data)
    }
    setTimeFrame("");
    setImg("");
    setCourseTitle("");
    setTimeout(() => navigate('/courses/thumbnail-row/' + pathName), 10)
  };

  return (
    <div className={design.AddWeek}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h2>Create Course Details</h2>
        <HighlightOffIcon
          onClick={handleShow}
          style={{
            cursor: 'pointer',
            color: '#292D32',
          }}
        />
      </div>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          color: '#3D4555',
        }}

        
        onSubmit={handleSubmit}
      >
        <label htmlFor='week'>
          <h3>Week:</h3>
        </label>
        <input 
          type='text' 
          id='week' 
          name='week'
          required
          value={timeFrame}
          onChange={(e) => setTimeFrame(e.target.value)}
          />

        <label htmlFor='title'>
          <h3>Title:</h3>
        </label>
        <input 
          type='text' 
          id='title' 
          name='title'
          required
          value={courseTitle}
          onChange={(e) => setCourseTitle(e.target.value)}
          />

         <label htmlFor='thumbnail'>
          <h3>Attach Thumbnail:</h3>
        </label>
        <input 
          type='file' 
          id='thumbnail' 
          name='thumbnail'
          ref={fileInputRef}
          required
          accept='image/*'
          onChange={handleThumbnailChange}
          />

           <AddButton content='Save'  />{' '}
      </form>
     
    </div>
  ) 
};

export default AddWeek;
