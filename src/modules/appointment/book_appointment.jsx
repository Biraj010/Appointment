import styles from "../../assets/stylesheet.module.css"
import Photo from "../../assets/online_consultation_web.png"
import { appointmentdata } from "../../data/appointmentdata";
import AppointCard from "../../components/appointment/appoint_card"
import style from "../../components/appointment/appoint.module.css"
const BookAppointment = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <img src={Photo} className={styles.background}></img>
      </div>
      <div className={style.appointcard_wrapper}>
        <div className={style.appointcard_container}>
          {appointmentdata.map((item, index)=>(
            <AppointCard key={index}{...item}/>
        ))}
        </div>
      </div>

    </>
  ); 
};
export default BookAppointment;