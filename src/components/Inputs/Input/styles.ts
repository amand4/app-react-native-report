import { StyleSheet } from "react-native";

import colors from "../../../styles/colors";

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.outline,
    color: colors.text,
    width: "100%",
    fontSize: 14,
    marginVertical: 5,
    paddingVertical: 2,
    paddingLeft: 10,
    height: 30,
    backgroundColor: colors.white,
  },

  inputInvalid: {
    borderWidth: 1,
    borderColor: colors.red,
    color: colors.text,
    width: "100%",
    fontSize: 14,
    marginVertical: 5,
    paddingVertical: 2,
    paddingLeft: 10,
    height: 30,
    backgroundColor: colors.white,
  },

  errorMessage: {
    color: colors.red,
    fontSize: 10,
  },
});

export default styles;
