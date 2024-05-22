export const validateRegister = (input) => {
  const errors = {};

  const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/;
  const emailRegex =
    /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})$/;
  const birthdateRegex = /^(\d{4})-(\d{2})-(\d{2})$/;
  const nDniRegex = /^\d{7,8}$/;
  const usernameRegex = /^(?=.*[a-zA-Z])[a-zA-Z0-9_]{3,16}$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/;

  if (!nameRegex.test(input.name)) {
    errors.name = "El nombre debe tener entre 2 y 50 caracteres";
  }

  if (!emailRegex.test(input.email)) {
    errors.email = "El email no es correcto";
  }

  if (!birthdateRegex.test(input.birthdate)) {
    errors.birthdate = "El formato de la fecha debe ser 'YYYY-MM-DD'";
  }

  if (!nDniRegex.test(input.nDni)) {
    errors.nDni = "El nDni debe tener 8 numeros";
  }

  if (!usernameRegex.test(input.username)) {
    errors.username =
      "Debe tener entre 3 y 16 caracteres, Debe contener al menos una letra mayúscula o minúscula.";
  }

  if (!passwordRegex.test(input.password)) {
    errors.password =
      "Debe tener entre 8 a 16 caracteres, Debe contener al menos una letra (mayúscula o minúscula), debe contener al menos un numero";
  }

  return errors;
};
