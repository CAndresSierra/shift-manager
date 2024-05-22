export const validateLogin = (input) => {
  const errors = {};

  const usernameRegexLogin = /^(?=.*[a-zA-Z])[a-zA-Z0-9_]{3,16}$/;
  const passwordRegexLogin = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/;

  if (!usernameRegexLogin.test(input.username)) {
    errors.username =
      "Debe tener entre 3 y 16 caracteres, Debe contener al menos una letra mayúscula o minúscula.";
  }

  if (!passwordRegexLogin.test(input.password)) {
    errors.password =
      "Debe tener entre 8 a 16 caracteres, Debe contener al menos una letra (mayúscula o minúscula), debe contener al menos un numero";
  }

  return errors;
};
