import { CiCircleCheck } from "react-icons/ci";
import styles from "../styles/DetailRegister.module.css";

const DetailRegister = ({ handleOnClose }) => {
  return (
    <div className={styles.container}>
      <CiCircleCheck className={styles.icono} />
      <h2 className={styles.h2}>Usuario registrado con exito </h2>
      <button onClick={handleOnClose} className={styles.buttonDetail}>
        Cerrar
      </button>
    </div>
  );
};

export default DetailRegister;
