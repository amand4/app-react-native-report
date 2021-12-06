import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

const styles = StyleSheet.create({
  stepsContainer: {
    flexDirection: "row",
    width: "100%",
    marginVertical: 20,
  },

  stepItem: {
    flexBasis: 0,
    flexGrow: 1,
  },

  stepText: {
    flexDirection: "column",
    alignItems: "center",
    fontSize: 12,
    textAlign: "center",
    color: colors.blue_light,
  },
});

export default styles;
