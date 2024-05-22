export const isValidateDate = (input) => {
  const dateRegex = /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

  if (!input.match(dateRegex)) {
    return false;
  }

  const date = new Date(input);
  const dayOfWeek = date.getDay();

  return dayOfWeek !== 0 && dayOfWeek !== 6 && date > new Date();
};
