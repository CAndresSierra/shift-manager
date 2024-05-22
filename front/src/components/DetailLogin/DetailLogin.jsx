import { CiCircleCheck } from "react-icons/ci";
import styles from "../styles/DetailLogin.module.css";

const DetailLogin = ({ handleOnClose }) => {
  return (
    <div className={styles.container}>
      <CiCircleCheck className={styles.iconoDetailLogin} />
      <h2 className={styles.h2DetailLogin}>Inicio de Sesion exitoso!</h2>
      <button onClick={handleOnClose} className={styles.buttonDetailLogin}>
        Cerrar
      </button>
    </div>
  );
};

export default DetailLogin;
