import { useEffect } from "react";
import Appointment from "../components/Appointment/Appointment.jsx";
import styles from "./styles/MyAppointments.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setAppointmentByUserId } from "../redux/reducer.js";

const MyAppointments = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userActive);
  const myappointments = useSelector((state) => state.userAppointments);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.name) {
      navigate("/home");
    }
  }, [user, navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/users/${user.id}`
        );
        dispatch(setAppointmentByUserId(response.data.appointments));
      } catch (error) {
        console.log(error.message);
      }
    };

    user.name && fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Mis Turnos</h1>
      <div className={styles.containerAppointments}>
        {!myappointments.length ? (
          <h2 className={styles.h2}>No hay turnos...</h2>
        ) : (
          myappointments.map((appointment) => {
            return (
              <Appointment
                key={appointment.id}
                date={appointment.date}
                time={appointment.time}
                description={appointment.description}
                status={appointment.status}
                id={appointment.id}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default MyAppointments;
