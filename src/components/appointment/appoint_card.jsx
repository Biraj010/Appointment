import PropTypes from "prop-types"
import styles from "./appoint.module.css"
 const AppointCard = ({title, catagory, image, link}) => {
    return (
      <>
        <div className={styles.appoint_Card}>
          <div className={styles.appointcard_header}></div>
          <img src={image} alt={title} className={styles.appointcard_image} />
          <div className={styles.appointcard_body}>
            <h4>{title}</h4>
            <p>{catagory}</p>
            <a href={link} className={styles.appoint_link}>
              Book now
              </a>
          </div>
        </div>
      </>
    );


}
AppointCard.propTypes = {
  title: PropTypes.string.isRequired,
  
//   link: PropTypes.string.isRequired,
image: PropTypes.string.isRequired,
//   linkname: PropTypes.string.isRequired,
  catagory: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default AppointCard;