import { useNavigate, Link } from "react-router-dom"
import { useContext, useState } from "react"
import styles from "./studentsFlow.module.css"
import logo from '../../assets/geek-union.png'
import img from '../../assets/side-img.png'
import GoBackBTN from "../../components/GoBackBTN/GoBackBTN";
import UserContext from "../../context/UserContext"



function SFlowIII() {
    const { user } = useContext(UserContext)
    const [firstName, setFirstName] = useState('Kizito')
    const [lastName, setLastName] = useState('Okoro')
    const [email, setEmail] = useState('kiol@gmail.com')
    const [learningTrack, setLearningTrack] = useState('Backend')

    const navigate = useNavigate();

    const declined = () => {
      navigate(-1)
     }

    const handleSubmit = (e) => {
      e.preventDefault()
      // setUser({firstName, lastName, email, learningTrack})
      console.log(user)
      navigate('/student-signup-create-password')
    }

  return (
    <div className={styles['signup-pg-1']}>

      <div className={styles['left-section-1']}>
          <img className={styles['logo']} src={logo} alt="logo" />
          <h1 className={styles['title']}>Create your account</h1>
          <p className={styles['subtitle']}>Sign up as either a student or facilitator</p>
          <GoBackBTN/>

          <form className={styles['form-2']} onSubmit={handleSubmit}>
            <section>
              <div>
                  <label htmlFor="first">First name</label>
                  <input 
                    type="text" 
                    id="first" 
                    placeholder={user.firstName}
                    value={user.firstName}
                    disabled
                    onChange={(e) => setFirstName(e.target.value)}
                    />
             </div>

              <div>
                <label htmlFor="last">Last name</label>
                <input 
                  type="text" 
                  id="last" 
                  placeholder={user.lastName}
                  value={user.lastName}
                  disabled
                  onChange={(e) => setLastName(e.target.value)}
                  />
              </div>

              <div>
                <label htmlFor="email">Email address </label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder={user.email}
                  value={user.email}
                  disabled
                  onChange={(e) => setEmail(e.target.value)}
                  />
              </div>

              <div>
                <label htmlFor="track">Learning track</label>
                <input 
                  type="text" 
                  id="track" 
                  placeholder={user?.learningTrack}
                  value={user.learningTrack}
                  disabled
                  onChange={(e) => setLearningTrack(e.target.value)}
                  />
              </div>
            </section>

            <button>Yes, I’m the one</button>
            <p onClick={declined}>No, I’m not the one</p>
          </form>

          <section className={styles['sign-up-footer']}>

            <div className={styles['progress-container']}>
                <div className={styles['progress']}></div>
                <div className={styles['progress']}></div>
                <div className={styles['current']}></div>
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

export default SFlowIII
