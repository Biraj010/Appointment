import { Link } from "react-router-dom";
import styles from "../assets/stylesheet.module.css";
import logo from "../assets/images.png";
import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import FormModel from "../components/login/form_model";
import LoginForm from "../modules/auth/login";
import SignupForm from "../modules/auth/signup";

const Layout = ({ children }) => {
  const [showFormModel, setFormModel] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showSignOut, setShowSignOut] = useState(false);
  const personIconRef = useRef(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [localStorage.getItem("isLoggedIn")]); // Add dependency

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        personIconRef.current &&
        !personIconRef.current.contains(event.target)
      ) {
        setShowSignOut(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleAuth = () => {
    setIsLogin(!isLogin);
  };

  const handleSignOut = () => {
    localStorage.removeItem("isLoggedIn");
    setLoggedIn(false);
    setShowSignOut(false);
  };

  const toggleSignOutMenu = () => {
    setShowSignOut(!showSignOut);
  };

  const handleAuthSuccess = () => {
    setFormModel(false);
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

          <div>
            {loggedIn ? (
              <div
                ref={personIconRef}
                style={{ position: "relative", display: "inline-block" }}
              >
                <span
                  role="button"
                  aria-label="person"
                  onClick={toggleSignOutMenu}
                  style={{ cursor: "pointer" }}
                >
                  👤
                </span>
                {showSignOut && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      right: 0,
                      backgroundColor: "white",
                      border: "1px solid #ccc",
                      padding: "5px",
                      zIndex: 1,
                      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <button
                      onClick={handleSignOut}
                      style={{
                        border: "none",
                        background: "none",
                        cursor: "pointer",
                      }}
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                className={styles.button}
                onClick={() => setFormModel(true)}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>

      {children}

      <FormModel show={showFormModel} onClose={() => setFormModel(false)}>
        {isLogin ? (
          <LoginForm onSwitch={toggleAuth} onAuthSuccess={handleAuthSuccess} />
        ) : (
          <SignupForm onSwitch={toggleAuth} onAuthSuccess={handleAuthSuccess} />
        )}
      </FormModel>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
