import styles from "./styles/Register.module.css";
import { useState } from "react";
import { validateRegister } from "../helpers/validateRegister.js";
import axios from "axios";
import DetailRegister from "../components/DetailRegister/DetailRegister.jsx";
import DetailError from "../components/DetailError/DetailError.jsx";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
  });

  const [detail, setDetail] = useState(false);
  const [detailError, setDetailError] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
  });

  const handlerOnChange = (event) => {
    const { name, value } = event.target;

    setUserData({
      ...userData,
      [name]: value,
    });

    setErrors(validateRegister(userData));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const postUser = async () => {
      try {
        await axios.post("http://localhost:3000/users/register", userData);
        setDetail(true);
      } catch (error) {
        setDetailError(true);
      }
    };

    postUser();
  };

  const handleOnClose = () => {
    setDetail(false);
  };

  const handleOnCloseError = () => {
    setDetailError(false);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleOnSubmit}>
        <h1 className={styles.h1}>Registrate!</h1>

        <div className={styles.containerLabel}>
          <label className={styles.label}>Name</label>
          <input
            type="text"
            className={styles.inputRegister}
            name="name"
            value={userData.name}
            onChange={handlerOnChange}
          />
          {errors.name && <p className={styles.pError}>{errors.name}</p>}
        </div>

        <div className={styles.containerLabel}>
          <label className={styles.label}>Email</label>
          <input
            type="text"
            className={styles.inputRegister}
            name="email"
            value={userData.email}
            onChange={handlerOnChange}
            placeholder="example@gmail.com"
          />
          {errors.email && <p className={styles.pError}>{errors.email}</p>}
        </div>

        <div className={styles.containerLabel}>
          <label className={styles.label}>Birthdate</label>
          <input
            type="text"
            className={styles.inputRegister}
            name="birthdate"
            value={userData.birthdate}
            onChange={handlerOnChange}
            placeholder="YYYY-MM-DD"
          />
          {errors.birthdate && (
            <p className={styles.pError}>{errors.birthdate}</p>
          )}
        </div>

        <div className={styles.containerLabel}>
          <label className={styles.label}>nDni</label>
          <input
            type="number"
            className={styles.inputRegister}
            name="nDni"
            value={userData.nDni}
            onChange={handlerOnChange}
          />
          {errors.nDni && <p className={styles.pError}>{errors.nDni}</p>}
        </div>

        <div className={styles.containerLabel}>
          <label className={styles.label}>Username</label>
          <input
            type="text"
            className={styles.inputRegister}
            name="username"
            value={userData.username}
            onChange={handlerOnChange}
          />
        </div>
        {errors.username && <p className={styles.pError}>{errors.username}</p>}

        <div className={styles.containerLabel}>
          <label className={styles.label}>Password</label>
          <input
            type="password"
            className={styles.inputRegister}
            name="password"
            value={userData.password}
            onChange={handlerOnChange}
          />
        </div>
        {errors.password && <p className={styles.pError}>{errors.password}</p>}

        <button className={styles.buttonRegister}>Registrate</button>
      </form>
      {detail && <DetailRegister handleOnClose={handleOnClose} />}
      {detailError && <DetailError handleOnCloseError={handleOnCloseError} />}
    </div>
  );
};

export default Register;
