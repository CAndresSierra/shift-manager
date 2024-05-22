import styles from "../styles/Appointment.module.css";
import { useState } from "react";
import DetailCancelAppointment from "../DetailCancelAppointment/DetailCancelAppointment";

const Appointment = ({ date, time, description, status, id }) => {
  const [detailCancel, setDetailCancel] = useState(false);

  const handleCancel = () => {
    setDetailCancel(true);
  };

  const closeDetail = () => {
    setDetailCancel(false);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>Date: {date}</h3>
      <h3 className={styles.h3}>Time: {time}</h3>
      <h3 className={styles.h3}>Description: {description}</h3>
      {status === "active" ? (
        <span className={styles.statusActive}>{status}</span>
      ) : (
        <span className={styles.statusCancelled}>{status}</span>
      )}
      <button
        className={styles.buttonCancel}
        disabled={status === "cancelled"}
        onClick={handleCancel}
      >
        Cancelar
      </button>
      {detailCancel && (
        <DetailCancelAppointment closeDetail={closeDetail} id={id} />
      )}
    </div>
  );
};

export default Appointment;
