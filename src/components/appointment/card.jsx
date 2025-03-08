import PropTypes from "prop-types";
import styles from "./card.module.css";
import { useNavigate } from "react-router-dom"; 

const Card = ({ title, rs, price, image }) => {
  const navigate = useNavigate(); 

  const handleClick = (e) => {
    e.preventDefault();

    const isLoggedIn = localStorage.getItem("isLoggedIn");
    console.log(localStorage.getItem("isLoggedIn"));

    if (isLoggedIn === "true") {
      
      console.log(navigate);
      navigate("/consultation"); 
    } else {
      // User is not logged in, navigate to the login page
      console.log(navigate);
      navigate("/login"); // Replace "/login" with your login page path
    }
  };

  return (
    <div className={styles.consult_card}>
      <div className={styles.card_header}></div>
      <img src={image} alt={title} className={styles.card_image} />
      <div className={styles.card_body}>
        <h4>{title}</h4>
        <p>
          {rs}
          {price}
        </p>
        <button className={styles.consult_button} onClick={handleClick}>
          Consult
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  rs: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired, // image prop added
};

export default Card;
