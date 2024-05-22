import { IoHomeSharp } from "react-icons/io5";
import styles from "../styles/Nav.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const user = useSelector((state) => state.userActive);

  return (
    <nav className={styles.navContainer}>
      <Link to="/home" className={styles.aHome}>
        <IoHomeSharp />
        Home
      </Link>

      {user.name && (
        <Link to="/appointments" className={styles.a}>
          Mis Turnos
        </Link>
      )}

      <Link to="/" className={styles.a}>
        Login
      </Link>
      <Link to="/register" className={styles.a}>
        Register
      </Link>

      {user.name && (
        <Link to="/createAppointment" className={styles.a}>
          Crea un turno
        </Link>
      )}
    </nav>
  );
};

export default Nav;
