import { useDispatch } from "react-redux";
import { cancelAppointmentUser } from "../../redux/reducer";
import axios from "axios";
import styles from "../styles/DetailCancelAppointment.module.css";
import { FiAlertTriangle } from "react-icons/fi";

const DetailCancelAppointment = ({ closeDetail, id }) => {
  const dispatch = useDispatch();

  const cancelAppointment = async () => {
    try {
      await axios.put(`http://localhost:3000/appointment/cancel/${id}`);
      dispatch(cancelAppointmentUser(id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelAppointment = () => {
    cancelAppointment();
    closeDetail();
  };

  const handleNoCancel = () => {
    closeDetail();
  };

  return (
    <div className={styles.container}>
      <FiAlertTriangle className={styles.icono} />
      <h1 className={styles.h1Cancel}>¿Quieres cancelar este turno?</h1>
      <div className={styles.containerButtons}>
        <button
          onClick={handleCancelAppointment}
          className={styles.buttonCancel}
        >
          Cancelar Turno
        </button>
        <button onClick={handleNoCancel} className={styles.buttonNoCancel}>
          No
        </button>
      </div>
    </div>
  );
};
export default DetailCancelAppointment;
