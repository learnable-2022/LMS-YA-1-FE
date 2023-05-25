import React, { useState } from "react";
import styles from "./Login.module.css";
import Img from "../../assets/Login-img.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "../../assets/css/satoshi.css";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

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
          <form>
            <label htmlFor="">Username</label>
            <input type="text" placeholder="Victor" />
            <label htmlFor="">Password</label>
            <div className={styles["password-input-container"]}>
              <input
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
            <button type="submit">Login</button>
          </form>
          <div className={styles["login-footer"]}>
            <p>
              Don’t have an account? <Link>Sign up</Link>
            </p>
          </div>
        </div>
        <div className={styles["image-section"]}>
          <img src={Img} alt="Login Image" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
