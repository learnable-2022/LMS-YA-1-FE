import React, { useState } from "react";
import styles from "./Login.module.css";
import Img from "../../assets/Login-img.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e, prev) => {
    e.preventDefault()
    
    fetch("https://lms-zwhm.onrender.com/api/v1/auth/", {
      method: "POST",
      headers: { "Content-Type": "application/json"  },
      body: JSON.stringify({ userName: 'kixic',  password: '123456'}),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));
  }

   
   



  return (
    <div>
      <div className={styles["login-page"]}>
        <div className={styles["login-section"]}>
          <div className={styles.logoArea}>
            <img src={logo} className={styles.logo} alt="" />
            <h1>Login</h1>
            <p>Sign up as either a student or facilitator</p>
          </div>
          <form className={styles["login-form"]} onSubmit={handleSubmit}>
            <label htmlFor="" className={styles["login-label"]}>
              Username
            </label>
            <input
              className={styles["login-input"]}
              type="text"
              placeholder="Victor"
            />
            <label htmlFor="" className={styles["login-label"]}>
              Password
            </label>
            <div className={styles["password-input-container"]}>
              <input
                className={styles["login-input"]}
                type={showPassword ? "text" : "password"}
                placeholder="*********"
              />
              <span
                className={styles["password-toggle"]}
                onClick={togglePasswordVisibility}
              >
                <RemoveRedEyeIcon />
              </span>
            </div>
            <p>
              <input type="checkbox" />
              <span> Remember me</span>
            </p>
            <button type="submit" className={styles["login-button"]}>
              Login
            </button>
          </form>
          <div className={styles["login-footer"]}>
            <p>
              Don’t have an account? <Link>Sign up</Link>
            </p>
          </div>
        </div>
        <div className={styles["image-section"]}>
          <img src={Img} className={styles["login-img"]} alt="Login Image" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

