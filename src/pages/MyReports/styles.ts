import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subtitle: {
    color: "#2F3C51",
    fontSize: 15,
  },
  subtitleStatus: {
    marginRight: 10,
    color: "#2F3C51",
    fontSize: 15,
  },
  title: {
    color: "#2F3C51",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,

    marginVertical: 5,
    paddingVertical: 10,
  },
  titleFilter: {
    color: "#3EC5CC",
    fontSize: 15,
    marginVertical: 5,
    paddingVertical: 2,
    marginHorizontal: 5,
  },
  textResult: {
    fontSize: 15,
    color: "#3EC5CC",
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 10,
  },
  containerLegend: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 2,
    borderBottomWidth: 1,
    borderColor: "#C4C4C4",
    paddingVertical: 5,
  },
  buttonRemove: {
    width: 50,
    height: 36,
    backgroundColor: colors.red,
    marginTop: 25,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    right: 10,
    paddingLeft: 10,
    alignSelf: "center",
  },
  footer: {
    alignItems: "center",
    marginVertical: 20,
  },
  containerFilter: {},
});

export default styles;
