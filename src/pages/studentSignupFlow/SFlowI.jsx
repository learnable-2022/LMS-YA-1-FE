import { useNavigate, Link } from "react-router-dom"
import { useState } from 'react'

import styles from "./studentsFlow.module.css"
import logo from '../../assets/geek-union.png'
import img from '../../assets/side-img.png'
import user from '../../assets/user.png'
import teacher from '../../assets/buildings.png'
import GoBackBTN from "../../components/GoBackBTN/GoBackBTN";

function SFlowII() {

    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
      setSelectedOption(e.target.value)
    }

    const nextPage = () => {
      if(selectedOption === "student"){
        navigate('/student-signup-access-key')
      }else if(selectedOption === "teacher"){
        navigate("/login")
      }
    }


  return (
    <div className={styles['signup-pg-1']}>

      <div className={styles['left-section-1']}>
          <img className={styles['logo']} src={logo} alt="logo" />
          <h1 className={styles['title']}>Create your account</h1>
          <p className={styles['subtitle']}>Sign up as either a student or facilitator</p>
          <GoBackBTN/>

          <section className={styles["user-choice-container-1"]}>
            <h1 className={styles["instruction-1"]}>Select your category</h1>

            <div className={styles["user-choice"]} >
              <figure>
                <img src={user} alt="" />
              </figure>
              <article>
                <p className={styles['user']}>I am a student</p>
                <p className={styles['intention']}>I am signing up to join an internship program</p>
              </article>
              <input className={styles['radio']} type="radio" value='student' checked={selectedOption === 'student'} onChange={handleChange} />
            </div>

            <div className={styles["user-choice"]} >
              <figure>
                <img src={teacher} alt="" />
              </figure>
              <article>
                <p className={styles['user']}>I am an educator</p>
                <p className={styles['intention']}>My organization runs tech internship programs</p>
              </article>
              <input type="radio" value='teacher' checked={selectedOption === 'teacher'} onChange={handleChange}/>
              
            </div>
            <button className={styles['next-btn']} onClick={nextPage}>Next</button>
          </section>
          
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
