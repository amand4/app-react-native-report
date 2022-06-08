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
  containerMessageConection: {
    backgroundColor: colors.red,
    padding: 16,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    maxHeight: 60,
  },
  containerMessageConectionText: {
    color: "#fff",
  },
  containerMessageConectionTextTitle: {
    color: "#fff",
    fontWeight: "bold",
  },
  icon: {
    paddingRight: 10,
  },

  containerMessageConectionSucess: {
    backgroundColor: colors.green_light,
    padding: 16,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    maxHeight: 60,
  },
  buttonAcitions: {
    flex: 1,
  },

  textLoading: {
    fontSize: 15,
    color: "#3EC5CC",
    textAlign: "center",
  },
  horizontal: {
    // flexDirection: "row",
    //  justifyContent: "space-around",
    padding: 40,
  },
});

export default styles;
