import { useNavigate } from "react-router"
import styles from "./studentsFlow.module.css"
import logo from '../../assets/geek-union.png'
import img from '../../assets/side-img.png'
import user from '../../assets/user.png'
import teacher from '../../assets/buildings.png'

import GoBackBTN from "../../components/GoBackBTN/GoBackBTN";

function SFlowII() {
    const navigate = useNavigate();
    const nextPage = (role) => {
      role === "student" ? navigate('/student-signup-access-key') : navigate("/")
    }


  return (
    <div className={styles['signup-pg']}>

      <div className={styles['left-section']}>
          <img className={styles['logo']} src={logo} alt="logo" />
          <h1 className={styles['title']}>Create your account</h1>
          <p className={styles['subtitle']}>Sign up as either a student or facilitator</p>
          <GoBackBTN/>

          <section className={styles["user-choice-container"]}>
            <h1 className={styles["instruction"]}>Select your category</h1>

            <div className={styles["user-choice"]} onClick={() => nextPage('student')}>
              <figure>
                <img src={user} alt="" />
              </figure>
              <article>
                <p className={styles['user']}>I am a student</p>
                <p className={styles['intention']}>I am signing up to join an internship program</p>
              </article>
              <input type="radio"/>
            </div>

            <div className={styles["user-choice"]} onClick={() => nextPage('teacher')}>
              <figure>
                <img src={teacher} alt="" />
              </figure>
              <article>
                <p className={styles['user']}>I am an educator</p>
                <p className={styles['intention']}>My organization runs tech internship programs</p>
              </article>
              <input type="radio"/>
            </div>
          </section>
          
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
