export const inputIsValid = (atributo: string) => {
  return atributo.length <= 1 && atributo.length > 0;
};

export const selectIsValid = (atributo: number) => {
  return atributo == 0;
};
