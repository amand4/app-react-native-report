import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
const styles = StyleSheet.create({
  containerSelect: {
    borderWidth: 1,
    borderColor: colors.outline,
    marginVertical: 5,
    backgroundColor: colors.white,
  },
  select: {
    height: 40,
    width: "100%",
    color: colors.text,
    fontSize: 18,
  },
  selectInvalid: {
    borderWidth: 1,
    borderColor: colors.red,
    marginVertical: 5,
    backgroundColor: colors.white,
    fontSize: 14,
  },
  errorMessage: {
    color: colors.red,
    fontSize: 10,
  },
});

export default styles;
