import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext, useRef, useEffect } from 'react';
import styles from './studentsFlow.module.css';
import logo from '../../../assets/geek-union.png';
import img from '../../../assets/side-img.png';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import GoBackBTN from '../../../components/GoBackBTN/GoBackBTN';
import UserContext from '../../../context/UserContext';
import { CircularProgress } from '@mui/material';
import { MdOutlineCancel, MdCheck, MdInfoOutline } from 'react-icons/md';
import axios from 'axios';

const USERNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const ETH_ADDRESS_REGEX = /^0x[a-fA-F0-9]{40}$/gm;
const SIGNUP_URL = 'https://lms-zwhm.onrender.com/api/v1/users/';

function SFlowIV() {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const userRef = useRef();
  const errRef = useRef();
  const successRef = useRef();

  const [userName, setUserName] = useState('');
  const [validUserName, setValidUserName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [address, setAddress] = useState('');
  const [validAddress, setValidAddress] = useState(false);
  const [addressFocus, setAddressFocus] = useState(false);

  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPasword, setMatchPassword] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMessage, setErrMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidUserName(USERNAME_REGEX.test(userName));
  }, [userName]);

  useEffect(() => {
    setValidAddress(ETH_ADDRESS_REGEX.test(address));
  }, [address]);

  useEffect(() => {
    setValidPassword(PASSWORD_REGEX.test(password));
    setValidMatch(password === matchPasword);
  }, [password, matchPasword]);

  useEffect(() => {
    setErrMessage('');
  }, [userName, address, password, matchPasword]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      user['userName'] = userName;
      user['password'] = password;
      user['eth'] = address;
      console.log(user);

      const response = await axios.post(SIGNUP_URL, JSON.stringify(user), {
        headers: { 'Content-Type': 'application/json' },
      });

      setSuccessMessage('Created successfully');
      successRef.current.focus();
    } catch (err) {
      setLoading(false);
      if (!err?.response) {
        setErrMessage('No Server Response');
      } else if (err.response?.status === 409) {
        setErrMessage('Username or Email Taken');
      } else {
        setErrMessage('Registration Failed');
      }
      errRef.current.focus();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (successMessage) {
        navigate('/login');
      }
      setSuccessMessage('');
    }, 3000);
  }, [successMessage, navigate]);

  return (
    <div className={styles['signup-pg-1']}>
      <div className={styles['left-section-1']} onSubmit={handleSubmit}>
        <img className={styles['logo']} src={logo} alt='logo' />
        <h1 className={styles['title']}>Create your account</h1>
        <p className={styles['subtitle']}>
          Sign up as either a student or facilitator
        </p>
        <GoBackBTN />

        <p
          ref={errRef}
          className={errMessage ? styles.errmsg : styles.offscreen}
          aria-live='assertive'
        >
          {errMessage}
        </p>

        <p
          ref={successRef}
          className={successMessage ? styles.successmsg : styles.offscreen}
          aria-live='assertive'
        >
          {successMessage}
        </p>

        <form className={styles['form-3']} onSubmit={handleSubmit}>
          <section>
            <div>
              <label htmlFor='username'>
                Username
                <MdCheck
                  className={validUserName ? styles.valid : styles.hide}
                />
                <MdOutlineCancel
                  className={
                    validUserName || !userName ? styles.hide : styles.invalid
                  }
                />
              </label>
              <input
                type='text'
                id='username'
                ref={userRef}
                autoComplete='off'
                placeholder='Victor'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                aria-invalid={validUserName ? 'false' : 'true'}
                aria-describedby='uidnote'
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />

              <div
                id='uidnote'
                className={
                  userFocus && userName && !validUserName
                    ? styles.suggestions
                    : styles.offscreen
                }
              >
                <MdInfoOutline className={styles.svg} /> 4 to 24 characters,
                <br />
                Must begin with a letter
                <br />
                Letters, numbers, underscores, hyphens allowed.
              </div>
            </div>

            <div>
              <label htmlFor='address'>
                Eth address
                <MdCheck
                  className={validAddress ? styles.valid : styles.hide}
                />
                <MdOutlineCancel
                  className={
                    validAddress || !address ? styles.hide : styles.invalid
                  }
                />
              </label>
              <input
                type='text'
                id='address'
                placeholder='Victor'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                autoComplete='off'
                required
                aria-invalid={validAddress ? 'false' : 'true'}
                aria-describedby='ethnote'
                onFocus={() => setAddressFocus(true)}
                onBlur={() => setAddressFocus(false)}
              />

              <div
                id='ethnote'
                className={
                  addressFocus && address && !validAddress
                    ? styles.suggestions
                    : styles.offscreen
                }
              >
                <MdInfoOutline className={styles.svg} /> Please enter a valid
                Eth address.
                <br />
                If you do not have one create before you continue
                <br />
              </div>
            </div>

            <div className={styles['pswd-container']}>
              <label htmlFor='password'>
                Password
                <MdCheck
                  className={validPassword ? styles.valid : styles.hide}
                />
                <MdOutlineCancel
                  className={
                    validPassword || !password ? styles.hide : styles.invalid
                  }
                />
              </label>
              <input
                type={showPassword1 ? 'text' : 'password'}
                id='password'
                placeholder='********'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete='off'
                aria-invalid={validPassword ? 'false' : 'true'}
                aria-describedby='pwdnote'
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
              />

              <div
                id='pwdnote'
                className={
                  passwordFocus && !validPassword
                    ? styles.suggestions
                    : styles.offscreen
                }
              >
                <MdInfoOutline className={styles.svg} /> 8 to 24 characters.
                <br />
                Must include uppercase and lowercase letters, a number and a
                special character.
                <br />
                Allowed special characters: ! @ # $ %
              </div>

              {showPassword1 ? (
                <FiEyeOff
                  className={styles['view-pswd']}
                  onClick={() => setShowPassword1(!showPassword1)}
                />
              ) : (
                <FiEye
                  className={styles['view-pswd']}
                  onClick={() => setShowPassword1(!showPassword1)}
                />
              )}
            </div>

            <div className={styles['pswd-container']}>
              <label htmlFor='passwordI'>
                Confirm password
                <MdCheck
                  className={
                    validMatch && matchPasword ? styles.valid : styles.hide
                  }
                />
                <MdOutlineCancel
                  className={
                    validMatch || !matchPasword ? styles.hide : styles.invalid
                  }
                />
              </label>
              <input
                type={showPassword2 ? 'text' : 'password'}
                id='passwordI'
                placeholder='********'
                value={matchPasword}
                onChange={(e) => setMatchPassword(e.target.value)}
                required
                aria-invalid={validMatch ? 'false' : 'true'}
                aria-describedby='confirm'
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              <div
                id='confirm'
                className={
                  matchFocus && !validMatch
                    ? styles.suggestions
                    : styles.offscreen
                }
              >
                <MdInfoOutline className={styles.svg} />
                Must match the first password input field.
              </div>

              {showPassword2 ? (
                <FiEyeOff
                  className={styles['view-pswd']}
                  onClick={() => setShowPassword2(!showPassword2)}
                />
              ) : (
                <FiEye
                  className={styles['view-pswd']}
                  onClick={() => setShowPassword2(!showPassword2)}
                />
              )}
            </div>
          </section>
          <div className={styles['checkbox-container']}>
            <input className={styles['checkbox']} type='checkbox' required />
            <p>By signing up, you agree to our terms & privacy policy</p>
          </div>

          <button
            disabled={
              !validUserName || !validAddress || !validPassword || !validMatch
                ? true
                : false
            }
          >
            {loading ? (
              <CircularProgress style={{ color: '#fff' }} size={23} />
            ) : (
              'Yes, I’m the one'
            )}
          </button>
        </form>
        <section className={styles['sign-up-footer']}>
          <div className={styles['progress-container']}>
            <div className={styles['progress']}></div>
            <div className={styles['progress']}></div>
            <div className={styles['progress']}></div>
            <div className={styles['current']}></div>
          </div>

          <p>
            Already have an account?
            <span>
              <Link to='/login' className={styles['login-link']}>
                Login
              </Link>
            </span>
          </p>
        </section>
      </div>

      <figure className={styles['right-section-1']}>
        <img src={img} alt='' />
      </figure>
    </div>
  );
}

export default SFlowIV;
