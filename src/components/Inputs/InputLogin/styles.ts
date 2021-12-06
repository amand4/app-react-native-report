import { StyleSheet } from "react-native";

import colors from "../../../styles/colors";

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    margin: 5,
    borderRadius: 5,
    paddingLeft: 10,
    borderColor: colors.white,
    backgroundColor: colors.white,
    alignSelf: "stretch",
    fontSize: 16,
  },
});

export default styles;
