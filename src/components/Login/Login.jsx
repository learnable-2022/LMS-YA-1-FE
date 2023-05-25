<<<<<<<<< Temporary merge branch 1
import React, { useState } from "react";
=========
import { useState } from "react";
>>>>>>>>> Temporary merge branch 2
import styles from "./Login.module.css";
import Img from "../../assets/Login-img.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
<<<<<<<<< Temporary merge branch 1
import "../../assets/css/satoshi.css";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
=========
// import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
>>>>>>>>> Temporary merge branch 2

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className={styles["login-page"]}>
        <div className={styles["login-section"]}>
          <div className={styles.logoArea}>
            <img src={logo} className={styles.logo} alt="" />
            <h1>Login</h1>
            <p>Sign up as either a student or facilitator</p>
          </div>
          <form className={styles["login-form"]}>
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
<<<<<<<<< Temporary merge branch 1
                <RemoveRedEyeIcon />
=========
                {/* <RemoveRedEyeIcon /> */}
>>>>>>>>> Temporary merge branch 2
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

