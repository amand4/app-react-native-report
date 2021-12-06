import { StyleSheet } from "react-native";

import colors from "../../../styles/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.pupple,
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: colors.pupple,
    width: "100%",
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
    color: colors.white,
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 10,
  },
  icone: {
    fontSize: 20,
    color: colors.white,
  },
});

export default styles;
