import { isValidateDate } from "./validateDate";

export const validateAppointment = (input) => {
  let errors = {};
  const regexTime = /^(0[9]|1[0-9]|2[0-1]):[0-5]\d$/;

  if (!regexTime.test(input.time)) {
    errors.time = "Debe ser desde las 9:00 Am hasta las 21:00 pm";
  }

  if (!isValidateDate(input.date)) {
    errors.date =
      "Debe ser del formato YYYY-MM-DD, no puede ser fin de semana y tiene que ser posterior al dia de envio";
  }
  return errors;
};
