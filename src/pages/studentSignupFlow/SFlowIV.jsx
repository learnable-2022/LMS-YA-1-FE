import styles from "./studentsFlow.module.css"
import logo from '../../assets/geek-union.png'
import img from '../../assets/side-img.jpg'


function SFlowIV() {
  return (
    <div className={styles['signup-pg']}>

      <div className={styles['left-section']}>
          <img className={styles['logo']} src={logo} alt="logo" />
          <h1 className={styles['title']}>Create your account</h1>
          <p className={styles['subtitle']}>Sign up as either a student or facilitator</p>

          <form className={styles['form-3']}>
            <section>
              <div>
                  <label htmlFor="username">Username</label>
                  <input type="text" id="username" placeholder="Victor"/>
             </div>

              <div>
                {/*Acting as a layout (design trick) placeholder*/}
              </div>

              <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="********"/>
              </div>

              <div>
                  <label htmlFor="passwordI">Confirm password</label>
                  <input type="password" id="passwordI" placeholder="********"/>
                </div>
            </section>
            <p>
              <input className={styles['checkbox']} type="checkbox" required />By signing up, you agree to our terms & privacy policy
            </p>

            <button>Yes, I’m the one</button>
          </form>

          <section className={styles['sign-up-footer']}>

            <div className={styles['progress-container']}>
                <div className={styles['progress']}></div>
                <div className={styles['progress']}></div>
                <div className={styles['progress']}></div>
                <div className={styles['current']}></div>
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

export default SFlowIV
