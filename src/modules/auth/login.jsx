import  { useState } from "react";
import PropTypes from "prop-types";
import styles from "./form.module.css";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ onSwitch, onAuthSuccess }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (
      formData.email === "uniquejack.br80@gmail.com" &&
      formData.password === "password123"
    ) {
      console.log("Authentication successful!");
      localStorage.setItem("isLoggedIn", "true");
      onAuthSuccess(); // Close the modal
      
      navigate("/");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className={styles.Container}>
      <h2 className={styles.Title}>Login</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <p style={{ color: "red" }}>{error}</p>
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

LoginForm.propTypes = {
  onSwitch: PropTypes.func.isRequired,
  onAuthSuccess: PropTypes.func.isRequired,
};

export default LoginForm;
