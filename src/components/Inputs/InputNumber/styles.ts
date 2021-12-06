import { StyleSheet } from "react-native";

import colors from "../../../styles/colors";

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.outline,
    color: colors.black,
    width: "12%",
    fontSize: 18,
    marginVertical: 5,
    // paddingVertical: 10,
    paddingLeft: 10,
    // height: 30,
    backgroundColor: colors.white,
    marginRight: 5,
  },
});

export default styles;
