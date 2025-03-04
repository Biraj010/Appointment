import PropTypes from "prop-types";
import styles from "./logindisplay.module.css"; 

const LoginDisplay = ({ show, onClose, children }) => {
  if (!show) return null; // If modal is not shown, return nothing

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        {/* Close button */}
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        {children} 
      </div>
    </div>
  );
};

console.log("Form");


LoginDisplay.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default LoginDisplay;
