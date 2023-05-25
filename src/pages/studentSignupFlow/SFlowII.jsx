import { useNavigate } from "react-router"
import styles from "./studentsFlow.module.css"
import logo from '../../assets/geek-union.png'
import img from '../../assets/side-img.png'
import GoBackBTN from "../../components/GoBackBTN/GoBackBTN";

function SFlowII() {
    const navigate = useNavigate();
    const nextPage = () => {
      navigate('/student-signup-details-confirm')
    }


  return (
    <div className={styles['signup-pg']}>

      <div className={styles['left-section']}>
          <img className={styles['logo']} src={logo} alt="logo" />
          <h1 className={styles['title']}>Create your account</h1>
          <p className={styles['subtitle']}>Sign up as either a student or facilitator</p>
          <GoBackBTN/>

          
          <form className={styles['form-1']}>
            <label htmlFor="token">Access key</label>
            <input type="text" id="token" placeholder="Enter your access key"/>
            <p>
              Copy and paste your access key in the above field. If you didn’t get any access key, please reach out to the organization where you registered for the training.
            </p>
            <button onClick={nextPage}>
              continue
            </button>
          </form>

          <section className={styles['sign-up-footer']}>

            <div className={styles['progress-container']}>
                <div className={styles['progress']}></div>
                <div className={styles['current']}></div>
                <div className={styles['progress']}></div>
                <div className={styles['progress']}></div>
            </div>


           <p>Already have an account? <span className={styles['login-link']}> Login</span></p>
          </section>
      
      </div>





      <figure className={styles['right-section']}>
        <img src={img} alt="" />
      </figure>    
    </div>
  )
}

export default SFlowII
