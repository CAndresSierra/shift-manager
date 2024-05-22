import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "../styles/DetailLoginError.module.css";

const DetailLoginError = ({ handleOnCloseError }) => {
  return (
    <div className={styles.container}>
      <AiOutlineCloseCircle className={styles.icono} />
      <h2 className={styles.h2LoginError}>El usuario no existe !</h2>
      <button onClick={handleOnCloseError} className={styles.buttonError}>
        Cerrar
      </button>
    </div>
  );
};

export default DetailLoginError;
