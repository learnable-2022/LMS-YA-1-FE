import { useState, useRef, useEffect, useContext } from 'react';
import UserContext from '../../context/UserContext';
import styles from './Login.module.css';
import Img from '../../assets/StudentSignup.png';
import logo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import Button from '../../components/Button/Button';

const LOGIN_URL = 'https://lms-zwhm.onrender.com/api/v1/auth/';

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const [showPassword, setShowPassword] = useState(false);

  const userRef = useRef();
  const errRef = useRef();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

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
      setLoading(true);

      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ userName: 'kixic', password: '123456' }),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      console.log(JSON.stringify(response?.data));
      // console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setUser({ userName, password, roles, accessToken });

      setUserName('');
      setPassword('');
      setSuccess(true);
      navigate('/admin-dashboard');
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in </h1>
          <br />
          <p>go bavk home</p>
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

                <Button
                  style={{ width: '90%', padding: '10px', marginTop: '30px' }}
                  content={
                    loading ? (
                      <CircularProgress style={{ color: '#fff' }} size={23} />
                    ) : (
                      'Login'
                    )
                  }
                  disabled={loading}
                />
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
