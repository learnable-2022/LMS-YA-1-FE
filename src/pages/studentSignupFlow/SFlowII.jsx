import { useNavigate, Link,  } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import styles from "./studentsFlow.module.css"
import logo from '../../assets/geek-union.png'
import img from '../../assets/side-img.png'
import GoBackBTN from "../../components/GoBackBTN/GoBackBTN";
import UserContext from "../../context/UserContext"
import { CircularProgress } from "@mui/material"

function SFlowII() {
  const navigate = useNavigate();

  const {user, setUser} = useContext(UserContext);
  const [accessKey, setAccessKey] = useState('');
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true)
    console.log(accessKey)



    fetch("https://lms-zwhm.onrender.com/api/v1/testUsers/" + accessKey, {
      method: "GET",
      headers: { "Content-Type": "application/json"  },
    })
      .then((response) => response.json())
      .then((data) => {

        user.firstName = data.data.firstName
        user.lastName =  data.data.lastName
        user.email =  data.data.email
        user.learningTrack = data.data.learningTrack
        setSuccess(data.success)
        setTimeout(() => {
          if(user.firstName){
            navigate('/student-signup-details-confirm')
          }
          setSuccess(false);
        }, 5000);

        console.log(data)
      })
      .catch((error) => console.error(error));

  }

  
  console.log(user)
  
    
    
     


  return (
    <div className={styles['signup-pg-1']}>

      <div className={styles['left-section-1']}>
          <img className={styles['logo']} src={logo} alt="logo" />
          <h1 className={styles['title']}>Create your account</h1>
          <p className={styles['subtitle']}>Sign up as either a student or facilitator</p>
          <GoBackBTN/>

          
          <form className={styles['form-1']} onSubmit={handleSubmit}>
            <label htmlFor="token">Access key</label>
            <input 
              type="text" 
              id="token" 
              placeholder="Enter your access key"
              value={accessKey}
              required
              onChange={(e) => setAccessKey(e.target.value)}
              />
            <p>
              Copy and paste your access key in the above field. If you didn’t get any access key, please reach out to the organization where you registered for the training.
            </p>
            <button>{loading? <CircularProgress style={{ color: "#fff" }} size={23} /> : "continue"}</button>
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
