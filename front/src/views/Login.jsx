import styles from "./styles/Login.module.css";
import { useState } from "react";
import { validateLogin } from "../helpers/validateLogin";
import axios from "axios";
import DetailLogin from "../components/DetailLogin/DetailLogin.jsx";
import DetailLoginError from "../components/DetailLoginError/DetailLoginError.jsx";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/reducer.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsArrow90DegRight } from "react-icons/bs";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userLoginDta, setUserLoginDta] = useState({
    username: "",
    password: "",
  });

  console.log(userLoginDta);

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const [detailLogin, setDetailLogin] = useState(false);
  const [detailLoginError, setDetailLoginError] = useState(false);

  const handleOnChangeLogin = (event) => {
    const { name, value } = event.target;

    setUserLoginDta({
      ...userLoginDta,
      [name]: value,
    });

    setErrors(validateLogin(userLoginDta));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const postLogin = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/users/login",
          userLoginDta
        );
        dispatch(setUser(response.data.user));

        setDetailLogin(true);
      } catch (error) {
        setDetailLoginError(true);
      }
    };
    postLogin();
  };

  const handleOnClose = () => {
    setDetailLogin(false);
  };
  const handleOnCloseError = () => {
    setDetailLoginError(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerWelcome}>
        <h1 className={styles.h1Welcome}>Bienvenido a </h1>
        <h1 className={styles.h1Title}>BarberStyle!</h1>
        <p className={styles.pWelcome}>
          Para poder agendar un turno debes tener una cuenta
          <p className={styles.pWelcome2}>Registrate o Inicia sesion</p>
        </p>
        <BsArrow90DegRight className={styles.icono} />
      </div>
      <form className={styles.formLogin} onSubmit={handleOnSubmit}>
        <h2 className={styles.h2}>Inicia Sesion!</h2>
        <div className={styles.containerLabelLogin}>
          <label className={styles.labelLogin}>Username</label>
          <input
            type="text"
            name="username"
            value={userLoginDta.username}
            onChange={handleOnChangeLogin}
            className={styles.inputLogin}
          />
          {errors.username && (
            <p className={styles.pErrorLogin}>{errors.username}</p>
          )}
        </div>

        <div className={styles.containerLabelLogin}>
          <label className={styles.labelLogin}>Password</label>
          <input
            type="password"
            name="password"
            value={userLoginDta.password}
            onChange={handleOnChangeLogin}
            className={styles.inputLogin}
          />
          <div className={styles.containerRegister}>
            <p className={styles.pRegister}>¿No tienes cuenta?</p>{" "}
            <Link to="/register" className={styles.link}>
              Registrate
            </Link>
          </div>

          {errors.password && (
            <p className={styles.pErrorLogin}>{errors.password}</p>
          )}
        </div>
        <button className={styles.buttonLogin}>Inicia Sesion</button>
      </form>
      {detailLogin && <DetailLogin handleOnClose={handleOnClose} />}
      {detailLoginError && (
        <DetailLoginError handleOnCloseError={handleOnCloseError} />
      )}
    </div>
  );
};

export default Login;
