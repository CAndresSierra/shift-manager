import { LuShieldClose } from "react-icons/lu";
import styles from "../styles/DetailCreateAppoError.module.css";

const DetailCreateAppoError = ({ handleCloseError }) => {
  return (
    <div className={styles.container}>
      <LuShieldClose className={styles.icono} />
      <h1 className={styles.h1}>No se puede crear un turno vacio</h1>
      <button onClick={handleCloseError} className={styles.buttonError}>
        Cerrar
      </button>
    </div>
  );
};

export default DetailCreateAppoError;
