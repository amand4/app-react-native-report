import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderBottomWidth: 1,
    borderColor: "#C4C4C4",
    backgroundColor: colors.white
  },
  content: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    margin: 2,
    padding: 5,
  },
  info: {
    color: "#7d7d7d",
    fontWeight: "bold",
    flexWrap: "wrap",
  },
  infoData: {
    color: "#7d7d7d",
    fontWeight: "bold",
    flexWrap: "wrap",
    textAlign: "center",
  },
  description: {
    color: "#3EC5CC",
    fontWeight: "bold",
  },
  icon: {
    alignContent: "center",
    alignSelf: "center"
  },
  iconeText: {
    fontSize: 10,
    textAlign: "center"

  },
  contentIcon: {
    width: 55,
    alignSelf: "center",
    marginHorizontal: 5,

  },

});
export default styles;
