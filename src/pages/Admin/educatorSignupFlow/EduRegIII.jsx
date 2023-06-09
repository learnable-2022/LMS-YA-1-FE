import styles from './eduReg.module.css';
import logo from '../../../assets/geek-union.png';
import img from '../../../assets/EduSignup.png';
import { Link, useNavigate } from 'react-router-dom';
import GoBackBTN from '../../../components/GoBackBTN/GoBackBTN';

function EduRegIII() {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate('/educator-signup-create-password');
  };

  return (
    <div className={styles['signup-pg']}>
      <div className={styles['left-section']}>
        <img className={styles['logo']} src={logo} alt='logo' />
        <h1 className={styles['title']}>Enter OTP</h1>
        <p className={styles['subtitle']}>
          Sign up as either a student or facilitator
        </p>
        <GoBackBTN />

        <form className={styles['form-33']}>
          <div className={styles['form-3-otp']}>
            <input type='text' placeholder='5' maxLength={1} />
            <input type='text' placeholder='5' maxLength={1} />
            <input type='text' placeholder='5' maxLength={1} />
            <input type='text' placeholder='5' maxLength={1} />
            <input type='text' placeholder='5' maxLength={1} />
            <input type='text' placeholder='5' maxLength={1} />
          </div>
          <p>
            If you didnt get the OTP after 2 mins, click <Link>ResendOTP</Link>
          </p>
          <button onClick={nextPage}>Continue</button>
        </form>

        <section className={styles['sign-up-footer']}>
          <div className={styles['progress-container']}>
            <div className={styles['progress']}></div>
            <div className={styles['progress']}></div>
            <div className={styles['current']}></div>
            <div className={styles['progress']}></div>
          </div>
          <p>
            Already have an account?{' '}
            <span className={styles['login-link']}>
              {' '}
              <Link to='/login' className={styles['login-link']}>
                Login
              </Link>
            </span>
          </p>
        </section>
      </div>
      <figure className={styles['right-section']}>
        <img src={img} alt='' />
      </figure>
    </div>
  );
}

export default EduRegIII;
