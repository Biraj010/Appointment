import Photo from "../../assets/sliderfinal.png"
import styles from "../../assets/stylesheet.module.css"

const AppointmentPage = () => {
    return (
      <div className={styles.Wrapper}>
        <img src={Photo} className={styles.background}></img>
      </div>
    );

}

export default AppointmentPage;