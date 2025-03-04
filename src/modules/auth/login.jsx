
import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./form.module.css";

const LoginForm = ({ onSwitch }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    alert("Logged in successfully");
  };

  return (
    <div className={styles.Container}>
      <h2 className={styles.Title}>Login</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
        <button type="submit" className={styles.Button}>
          Login
        </button>
      </form>
      <p className={styles.switchText}>
        Don&apos;t have an account?{" "}
        <span onClick={onSwitch} className={styles.switchLink}>
          Sign up
        </span>
      </p>
    </div>
  );
};

export default LoginForm;


LoginForm.propTypes = {
  onSwitch: PropTypes.func.isRequired,
};

