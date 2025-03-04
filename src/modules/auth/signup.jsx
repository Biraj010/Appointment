import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./form.module.css";

const SignupForm = ({ onSwitch }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(""); // State to hold error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "password" || e.target.name === "confirmPassword") {
      setError(""); // Clear error message when user starts typing
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    console.log("Signup Data:", formData);
    // Proceed with the signup process
  };

  return (
    <div className={styles.Container}>
      <h2 className={styles.Title}>Sign Up</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
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
          className={`${styles.inputField} ${error ? styles.errorInput : ""}`}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className={`${styles.inputField} ${error ? styles.errorInput : ""}`}
        />
        {error && <span className={styles.errorText}>{error}</span>}
        <button type="submit" className={styles.Button}>
          Sign Up
        </button>
      </form>
      <p className={styles.switchText}>
        Already have an account?{" "}
        <span onClick={onSwitch} className={styles.switchLink}>
          Login
        </span>
      </p>
    </div>
  );
};

SignupForm.propTypes = {
  onSwitch: PropTypes.func.isRequired,
};

export default SignupForm;
