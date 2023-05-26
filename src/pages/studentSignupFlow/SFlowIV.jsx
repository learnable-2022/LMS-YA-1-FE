import { Link } from "react-router-dom"
import { useState } from "react"
import styles from "./studentsFlow.module.css"
import logo from '../../assets/geek-union.png'
import img from '../../assets/side-img.png'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import GoBackBTN from "../../components/GoBackBTN/GoBackBTN"


function SFlowIV() {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  return (
    <div className={styles['signup-pg-1']}>

      <div className={styles['left-section-1']}>
          <img className={styles['logo']} src={logo} alt="logo" />
          <h1 className={styles['title']}>Create your account</h1>
          <p className={styles['subtitle']}>Sign up as either a student or facilitator</p>
          <GoBackBTN/>

          <form className={styles['form-3']}>
            <section>
              <div>
                  <label htmlFor="username">Username</label>
                  <input type="text" id="username" placeholder="Victor"/>
             </div>

              <div>
                {/*Acting as a layout (design trick) placeholder*/}
              </div>

              <div className={styles['pswd-container']}>
                <label htmlFor="password">Password</label>
                <input 
                  type={showPassword1 ? "text" : "password"} 
                  id="password" 
                  placeholder="********"
                  />
                  {
                    showPassword1 ? 
                    (<FiEyeOff className={styles['view-pswd']} onClick={() => setShowPassword1(!showPassword1)} />)
                    :
                    (<FiEye className={styles['view-pswd']} onClick={() => setShowPassword1(!showPassword1)} />)
                    }
              </div>

              <div className={styles['pswd-container']}>
                  <label htmlFor="passwordI">Confirm password</label>
                  <input 
                    type={showPassword2 ? "text" : "password"} 
                    id="passwordI"
                    placeholder="********"
                    />
                    {
                      showPassword2 ? 
                      (<FiEyeOff className={styles['view-pswd']} onClick={() => setShowPassword2(!showPassword2)} />)
                      :
                      (<FiEye className={styles['view-pswd']} onClick={() => setShowPassword2(!showPassword2)} />)
                    }
                  
                </div>
            </section>
            <div className={styles['checkbox-container']}>
              <input className={styles['checkbox']} type="checkbox" required />
              <p>By signing up, you agree to our terms & privacy policy</p> 
            </div>

            <button>Yes, I’m the one</button>
          </form>

          <section className={styles['sign-up-footer']}>

            <div className={styles['progress-container']}>
                <div className={styles['progress']}></div>
                <div className={styles['progress']}></div>
                <div className={styles['progress']}></div>
                <div className={styles['current']}></div>
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

export default SFlowIV
