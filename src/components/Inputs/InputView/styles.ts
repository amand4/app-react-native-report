import { StyleSheet } from "react-native";

import colors from "../../../styles/colors";

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.outline,
    color: colors.gray_light,
    width: "100%",
    fontSize: 14,
    marginVertical: 5,
    paddingVertical: 2,
    paddingLeft: 10,
    height: 30,
    backgroundColor: colors.gray_dark,
    textTransform: "capitalize"
  },

});

export default styles;
