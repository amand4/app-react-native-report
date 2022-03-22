import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  btnCloseContainer: {
    flexDirection: "row",
    margin: 5,
    width: "100%",
    justifyContent: "flex-end",
  },

  btnCloseText: {
    fontSize: 14,

    color: colors.red,
    marginHorizontal: 4,
  },
});

export default styles;
