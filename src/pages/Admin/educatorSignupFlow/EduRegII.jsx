import { useNavigate } from "react-router"
import styles from "./eduReg.module.css"
import logo from '../../assets/geek-union.png'
import img from '../../assets/side-img.png'
import GoBackBTN from "../../components/GoBackBTN/GoBackBTN";



function EduRegII() {
    const navigate = useNavigate();
    const nextPage = () => {
      navigate('educator-enter-otp')
    }

  return (
    <div className={styles['signup-pg']}>

      <div className={styles['left-section']}>
          <img className={styles['logo']} src={logo} alt="logo" />
          <h1 className={styles['title']}>Create your account</h1>
          <p className={styles['subtitle']}>Sign up as either a student or facilitator</p>
          <GoBackBTN/>

          <form className={styles['form-2']}>
            <section>
              <div>
                  <label htmlFor="first">First name</label>
                  <input type="text" id="first" placeholder="Victor"/>
             </div>

              <div>
                <label htmlFor="last">Last name</label>
                <input type="text" id="last" placeholder="Eze"/>
              </div>

              <div>
                <label htmlFor="email">Email address </label>
                <input type="email" id="email" placeholder="example@company.com"/>
              </div>

              <div>
                <label htmlFor="track">Learning track</label>
                <input type="text" id="track" placeholder="Frontend"/>
              </div>
            </section>

            <button onClick={nextPage}>Yes, I’m the one</button>
            <p>No, I’m not the one</p>
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

export default EduRegII