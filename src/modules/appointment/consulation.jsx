import Photo from "../../assets/book_appointment_web.png";
import styles from "../../assets/stylesheet.module.css";
import { consultdata } from "../../data/consultdata";
import Card from "../../components/appointment/card";
const Consultation = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <img src={Photo} className={styles.background}></img>
      </div>
      <div className={styles.card_wrapper}>
        <div className={styles.card_container}>
          {consultdata.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Consultation;
