import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "../styles/DetailError.module.css";

const DetailError = ({ handleOnCloseError }) => {
  return (
    <div className={styles.container}>
      <AiOutlineCloseCircle className={styles.icono} />
      <h2 className={styles.h2}>Ha ocurrido un Error</h2>
      <button onClick={handleOnCloseError} className={styles.buttonError}>
        Cerrar
      </button>
    </div>
  );
};

export default DetailError;
