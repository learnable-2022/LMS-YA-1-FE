import styles from './gobackbtn.module.css';
import { useNavigate } from 'react-router';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'

function GoBackBTN() {
  const navigate = useNavigate();
  const goBack = () => {
      navigate(-1)
    }
  return (
    
    <button onClick={goBack}>
      <BsFillArrowLeftCircleFill
        className={styles['arrow']}
      /> 
      back</button>
  )
}

export default GoBackBTN
