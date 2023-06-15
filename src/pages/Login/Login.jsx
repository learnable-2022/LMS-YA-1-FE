import { useState, useRef, useEffect, useContext } from 'react';
import UserContext from '../../context/UserContext';
import styles from './Login.module.css';
import Img from '../../assets/StudentSignup.png';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import axios from 'axios';

import LinkPage from './LinkPage';
import jwtDecode from 'jwt-decode';

const LOGIN_URL = 'https://lms-zwhm.onrender.com/api/v1/auth/';

const LoginPage = () => {
  const { auth, setAuth } = useContext(UserContext);

  const [showPassword, setShowPassword] = useState(false);

  const userRef = useRef();
  const errRef = useRef();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMsg('');
  }, [userName, password]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ userName, password }),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      
      console.log(jwtDecode(response?.data?.token))
      setAuth(jwtDecode(response?.data?.token))
      // console.log(JSON.stringify(response));
      

      

      setUserName('');
      setPassword('');
      setSuccess(true);
    } catch (error) {
      if (!error.response) {
        setErrorMsg('No Server Response');
      } else if (error.response?.status === 400) {
        setErrorMsg('Missing Username or Password');
      } else if (error.response?.status === 401) {
        setErrorMsg('Unauthorized');
      } else {
        setErrorMsg('Login Failed');
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in </h1>
          {console.log(auth?.role)}

          <br />
          <LinkPage />
        </section>
      ) : (
        <section>
          <div className={styles['login-page']}>
            <div className={styles['login-section']}>
              <div className={styles.logoArea}>
                <img src={logo} className={styles.logo} alt='' />
                <h1>Login</h1>
                <p>Sign up as either a student or facilitator</p>
              </div>
              <p
                ref={errRef}
                className={`${styles.errorMsg} ${
                  errorMsg ? styles.errorMsg : styles.offscreen
                }`}
                aria-live='assertive'
              >
                {errorMsg}
              </p>
              <form className={styles['login-form']} onSubmit={handleSubmit}>
                <label htmlFor='userName' className={styles['login-label']}>
                  Username
                </label>
                <input
                  className={styles['login-input']}
                  type='text'
                  id='userName'
                  ref={userRef}
                  autoComplete='off'
                  placeholder='Victor'
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                  required
                />
                <label htmlFor='password' className={styles['login-label']}>
                  Password
                </label>
                <div className={styles['password-input-container']}>
                  <input
                    className={styles['login-input']}
                    type={showPassword ? 'text' : 'password'}
                    placeholder='*********'
                    id='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                  <span
                    className={styles['password-toggle']}
                    onClick={togglePasswordVisibility}
                  >
                    <RemoveRedEyeIcon />
                  </span>
                </div>
                <p>
                  <input type='checkbox' required />
                  <span> Remember me</span>
                </p>
                <button type='submit' className={styles['login-button']}>
                  Login
                </button>
              </form>
              <div className={styles['login-footer']}>
                <p>
                  Don’t have an account? <Link to='/signup'>Sign up</Link>
                </p>
              </div>
            </div>
            <div className={styles['image-section']}>
              <img
                src={Img}
                className={styles['login-img']}
                alt='Login Image'
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default LoginPage;
