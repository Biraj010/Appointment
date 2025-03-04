import { Link } from "react-router-dom";
import styles from "../assets/stylesheet.module.css";
import logo from "../assets/images.png";
import PropTypes from "prop-types";
import { useState } from "react";
import LoginDisplay from "../components/login/logindisplay";
import LoginForm from "../modules/auth/login";
import SignupForm from "../modules/auth/signup";

const Layout = ({ children }) => {
  const [showLoginDisplay, setLoginDisplay] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuth = () => {
    setIsLogin(!isLogin); // Toggle between Login and Signup
  };

  return (
    <>
      <nav className={styles.nav}>
        <img src={logo} className={styles.logo} alt="Logo" />
        <div className={styles.navbar}>
          <Link to="/" className={styles.navItems}>
            Home
          </Link>
          <Link to="/bookappointment" className={styles.navItems}>
            Book Appointment
          </Link>
          <Link to="/consultation" className={styles.navItems}>
            Consultation
          </Link>
          <Link to="/dashboard" className={styles.navItems}>
            Dashboard
          </Link>

          {/* Login Button */}
          <button
            className={styles.button}
            onClick={() => setLoginDisplay(true)}
          >
            Login
          </button>
        </div>
      </nav>

      {/* Render children (page content) */}
      {children}

      {/* Login Modal */}
      <LoginDisplay
        show={showLoginDisplay}
        onClose={() => setLoginDisplay(false)}
      >
        {isLogin ? (
          <LoginForm onSwitch={toggleAuth} />
        ) : (
          <SignupForm onSwitch={toggleAuth} />
        )}
      </LoginDisplay>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
