import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 1,
    height: 100,
    width: 100,
    margin: 5,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    color: colors.blue_light,
  },
  buttonIcon: {
    fontSize: 30,
    color: colors.blue_light,
    paddingVertical: 10,
  },
  unavailable: {
    backgroundColor: colors.gray_dark,
    borderRadius: 1,
    height: 100,
    width: 100,
    margin: 5,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonIconUnavailable: {
    fontSize: 30,
    color: colors.gray,
    paddingVertical: 10,
  },
  textUnavailable: {
    color: colors.gray,

  }
});

export default styles;
