import styles from "../styles/Navbar.module.css";
import Nav from "./Nav.jsx";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerTitleIcon}>
        <img
          className={styles.imgNavbar}
          src="https://www.logoku.com/image/data/items/1704903556_logokucom_logoku-fidznet-barber-wings.jpg.webp"
          alt="https://www.logoku.com/image/data/items/1704903556_logokucom_logoku-fidznet-barber-wings.jpg.webp"
        />
        <h1 className={styles.h1Navbar}>BarberStyle</h1>
      </div>
      <Nav />
    </div>
  );
};

export default Navbar;
