export const maskRep = (value: string) => {
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{4})(\d)/, "$1/$2");

  return value;
};

export const maskPlaca = (value: string) => {
  let newValue = value.toLocaleUpperCase();
  let newPlaceValue = newValue.replace(/^(\w{3})(\d)/, "$1-$2");

  return newPlaceValue;
};
