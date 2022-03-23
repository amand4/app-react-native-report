import { StyleSheet } from "react-native";

import colors from "../../../styles/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: colors.blue_light,
    width: "40%",

    shadowColor: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.9,
    elevation: 5,
  },

  buttonText: {
    color: colors.blue_light,
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
  },
  icone: {
    fontSize: 20,
    color: colors.blue_light,
  },
});

export default styles;
