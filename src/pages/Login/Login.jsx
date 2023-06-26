import { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import styles from "./Login.module.css";
import Img from "../../assets/StudentSignup.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { CircularProgress } from "@mui/material";
import axios from "axios";

import jwtDecode from "jwt-decode";

const LOGIN_URL = "https://lms-zwhm.onrender.com/api/v1/auth/";

const LoginPage = () => {
  const { auth, setAuth } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const userRef = useRef();
  const errRef = useRef();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMsg("");
  }, [userName, password]);

  useEffect(() => {
    const storedUserName = localStorage.getItem("rememberedUserName");
    const storedPassword = localStorage.getItem("rememberedPassword");
    const storedRememberMe = localStorage.getItem("rememberMe");

    if (storedUserName && storedPassword && storedRememberMe) {
      setUserName(storedUserName);
      setPassword(storedPassword);
      setRememberMe(storedRememberMe === "true");
    }
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ userName, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      //console.log(response?.data)
      console.log(jwtDecode(response?.data?.token));

      setAuth(jwtDecode(response?.data?.token));
      auth["token"] = response?.data?.token;

      if (rememberMe) {
        localStorage.setItem("rememberedUserName", userName);
        localStorage.setItem("rememberedPassword", password);
        localStorage.setItem("rememberMe", rememberMe);
      } else {
        localStorage.removeItem("rememberedUserName");
        localStorage.removeItem("rememberedPassword");
        localStorage.removeItem("rememberMe");
      }

      setUserName("");
      setPassword("");
      setRememberMe(false);
      setSuccess(true);
      setTimeout(() => navigate("/linkpage"), 10);
    } catch (error) {
      setLoading(false);
      if (!error.response) {
        setErrorMsg("No Server Response");
      } else if (error.response?.status === 400) {
        setErrorMsg("Missing Username or Password");
      } else if (error.response?.status === 401) {
        setErrorMsg("Unauthorized");
      } else {
        setErrorMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <section>
      <div className={styles["login-page"]}>
        <div className={styles["login-section"]}>
          <div className={styles.logoArea}>
            <img src={logo} className={styles.logo} alt="" />
            <h1>Login</h1>
            <p>Sign in as either a student or facilitator</p>
          </div>
          <p
            ref={errRef}
            className={`${styles.errorMsg} ${
              errorMsg ? styles.errorMsg : styles.offscreen
            }`}
            aria-live="assertive"
          >
            {errorMsg}
          </p>
          <form className={styles["login-form"]} onSubmit={handleSubmit}>
            <label htmlFor="userName" className={styles["login-label"]}>
              Username
            </label>
            <input
              className={styles["login-input"]}
              type="text"
              id="userName"
              ref={userRef}
              autoComplete="off"
              placeholder="victor"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              required
            />
            <label htmlFor="password" className={styles["login-label"]}>
              Password
            </label>
            <div className={styles["password-input-container"]}>
              <input
                className={styles["login-input"]}
                type={showPassword ? "text" : "password"}
                placeholder="*********"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
              <span
                className={styles["password-toggle"]}
                onClick={togglePasswordVisibility}
              >
                <RemoveRedEyeIcon />
              </span>
            </div>
            <p>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <span> Remember me</span>
            </p>
            <button type="submit" className={styles["login-button"]}>
              {loading ? (
                <CircularProgress style={{ color: "#fff" }} size={23} />
              ) : (
                "Login"
              )}
            </button>
          </form>
          <div className={styles["login-footer"]}>
            <p>
              Don’t have an account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
        </div>
        <div className={styles["image-section"]}>
          <img src={Img} className={styles["login-img"]} alt="Login Image" />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
