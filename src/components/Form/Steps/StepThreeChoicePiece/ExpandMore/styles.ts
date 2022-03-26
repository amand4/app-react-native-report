import { StyleSheet } from "react-native";
import colors from "../../../../../styles/colors";

const styles = StyleSheet.create({
  containerHide: {
    display: "none",
  },
  container: {
    display: "flex",
    width: "95%",
    padding: 5,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.gray_dark,
    justifyContent: "center",
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginHorizontal: 5,
  },
  title: {
    flex: 1,
    marginLeft: 5,
    fontSize: 15,
    color: colors.formHeading,
    borderColor: colors.blue_light,
    fontWeight: "bold",
  },
  describe: {
    color: colors.blue_light,
  },
  describeIntegrated: {
    color: colors.green_light,
  },
  thumbnail: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    padding: 10,
  },
  containerImage: {
    width: 60,
    height: 60,
    marginHorizontal: 10,
  },
  describeAdultered: {
    color: colors.red,
  },
});

export default styles;
