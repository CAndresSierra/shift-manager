import { useState } from "react";
import { validateAppointment } from "../helpers/validateAppointment";
import styles from "./styles/CreateAppointment.module.css";
import { isValidateDate } from "../helpers/validateDate";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserAppointment } from "../redux/reducer";
import DetailCreateAppoError from "../components/DetailCreateAppoError/DetailCreateAppoError";

const CreateAppointment = () => {
  const user = useSelector((state) => state.userActive);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [appointmentDta, setAppointmentDta] = useState({
    date: "",
    time: "",
    status: "active",
    description: "",
    userId: user.id,
  });

  isValidateDate(appointmentDta.date);

  const [errors, setErrors] = useState({
    date: "",
    time: "",
    description: "",
  });
  console.log(errors);

  const [detailError, setDetailError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setAppointmentDta({
      ...appointmentDta,
      [name]: value,
    });

    setErrors(validateAppointment(appointmentDta));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const postAppointment = async () => {
      if (
        appointmentDta.date.length === 0 ||
        appointmentDta.time.length === 0 ||
        appointmentDta.description.length === 0
      ) {
        setDetailError(true);
      } else {
        try {
          const response = await axios.post(
            "http://localhost:3000/appointment/schedule",
            appointmentDta
          );
          alert("Se creo el turno correctamente");
          navigate("/appointments");
          dispatch(setUserAppointment(response.data));
        } catch (error) {
          console.log(error);
        }
      }
    };

    postAppointment();
  };

  const handleCloseError = () => {
    setDetailError(false);
  };

  return (
    <div className={styles.container}>
      <form className={styles.formCreate} onSubmit={handleOnSubmit}>
        <h2 className={styles.h2Create}>Crea un Turno</h2>
        <p className={styles.pPrincipal}>
          El horario de atencion es de lunes a viernes de 9:00 am hasta las
          22:00 pm
        </p>
        <div className={styles.containerLabelCreate}>
          <label className={styles.labelCreate}>Date</label>
          <input
            type="text"
            value={appointmentDta.date}
            onChange={handleChange}
            name="date"
            className={styles.inputCreate}
            placeholder="YYYY-MM-DD"
          />
        </div>
        {errors.date && <p className={styles.pErrorCreate}>{errors.date}</p>}

        <div className={styles.containerLabelCreate}>
          <label className={styles.labelCreate}>Time</label>
          <input
            type="time"
            value={appointmentDta.time}
            onChange={handleChange}
            name="time"
            className={styles.inputCreate}
          />
        </div>
        {errors.time && <p className={styles.pErrorCreate}>{errors.time}</p>}

        <div className={styles.containerLabelCreate}>
          <label className={styles.labelCreate}>Description</label>
          <input
            type="text"
            value={appointmentDta.description}
            onChange={handleChange}
            name="description"
            className={styles.inputCreate}
          />
          {errors.description && (
            <p className={styles.pErrorCreate}>{errors.description}</p>
          )}
        </div>
        <button className={styles.buttonCreate}>Enviar</button>
      </form>
      {detailError && (
        <DetailCreateAppoError handleCloseError={handleCloseError} />
      )}
    </div>
  );
};

export default CreateAppointment;
