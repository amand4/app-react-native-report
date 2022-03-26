export const formatNewDate = (date: Date) => {
  const newDate = new Date(date);
  return `${newDate.getDate()}/${
    newDate.getMonth() + 1
  }/${newDate.getFullYear()}`;
};

export const formatEditDate = (datee: String) => {
  if (typeof datee === "string") {
    const newDate = new Date(datee);
    return `${newDate.getDate()}/${
      newDate.getMonth() + 1
    }/${newDate.getFullYear()}`;
  }
};
