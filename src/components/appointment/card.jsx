import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styles from "./card.module.css";

const Card = ({ title, rs, price, image, link, linkname }) => {
  const navigate = useNavigate(); 

  const handleClick = (e) => {
    e.preventDefault(); 
    navigate(link); 
  };

  return (
    <div className={styles.consult_card}>
      <div className={styles.card_header}></div>
      <img src={image} alt={title} className={styles.card_image} />
      <div className={styles.card_body}>
        <h4>{title}</h4>
        <p>{rs}{price}</p>
        <a href={link} className={styles.consult_link} onClick={handleClick}>
          {linkname}
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  rs: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  linkname: PropTypes.string.isRequired,
};

export default Card;
