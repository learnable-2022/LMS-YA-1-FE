import { useNavigate, Link,  } from "react-router-dom"
import { useContext, useState,  useRef  } from "react"
import styles from "./studentsFlow.module.css"
import logo from '../../assets/geek-union.png'
import img from '../../assets/side-img.png'
import GoBackBTN from "../../components/GoBackBTN/GoBackBTN";
import UserContext from "../../context/UserContext"
import { CircularProgress } from "@mui/material"
import axios from 'axios';

const ACCESS_KEY_ENDPOINT = "https://lms-zwhm.onrender.com/api/v1/testUsers/" 

function SFlowII() {
  const navigate = useNavigate();

  const errRef = useRef()
  const successRef = useRef()

  const { user } = useContext(UserContext);
  const [accessKey, setAccessKey] = useState('');
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)
  const [errMessage, setErrMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      setLoading(true)
      console.log(accessKey)

      const response = await axios.get(
          ACCESS_KEY_ENDPOINT + accessKey,
          {
            headers : { "Content-Type": "application/json"  }
          }
      )
      const apiResponse = response.data.data
      user.firstName = apiResponse.firstName
      user.lastName =  apiResponse.lastName
      user.email =  apiResponse.email
      user.learningTrack = apiResponse.learningTrack
      setSuccessMessage('Verified successfully');

      setTimeout(() => {
          if(user.firstName){
            navigate('/student-signup-details-confirm')
        }
          setSuccessMessage('');
        }, 3000);
      console.log(user)
      successRef.current.focus()
    }catch(err){
      setLoading(false)
      if(!err.response){
        setErrMessage("No Server reponse")
      }else{
        setErrMessage("Invalid Key")
      }
      errMessage.current.focus()
    }
  }  

  
    
    
     


  return (
    <div className={styles['signup-pg-1']}>

      <div className={styles['left-section-1']}>
          <img className={styles['logo']} src={logo} alt="logo" />
          <h1 className={styles['title']}>Create your account</h1>
          <p className={styles['subtitle']}>Sign up as either a student or facilitator</p>
          <GoBackBTN/>
          <p
            ref={errRef}
            className={errMessage? styles.errmsg : styles.offscreen}
            aria-live="assertive"
            >
              {errMessage}
          </p>

          <p
            ref={successRef}
            className={successMessage? styles.successmsg : styles.offscreen}
            aria-live="assertive"
            >
              {successMessage}
          </p>
          
          <form className={styles['form-1']} onSubmit={handleSubmit}>
            <label htmlFor="token">Access key</label>
            <input 
              type="text" 
              id="token"
              autoComplete="off"
              placeholder="Enter your access key"
              value={accessKey}
              required
              onChange={(e) => setAccessKey(e.target.value)}
              />
            <p>
              Copy and paste your access key in the above field. If you didn’t get any access key, please reach out to the organization where you registered for the training.
            </p>
            <button>
                 {loading? <CircularProgress style={{ color: "#fff" }} size={23} /> : "continue"}
            </button>
          </form>

          <section className={styles['sign-up-footer']}>

            <div className={styles['progress-container']}>
                <div className={styles['progress']}></div>
                <div className={styles['current']}></div>
                <div className={styles['progress']}></div>
                <div className={styles['progress']}></div>
            </div>


           <p>Already have an account?
              <span >
                <Link to='/login' className={styles['login-link']}>
                   Login
                </Link>
              </span>
            </p>
          </section>
      
      </div>





      <figure className={styles['right-section-1']}>
        <img src={img} alt="" />
      </figure>    
    </div>
  )
}

export default SFlowII
