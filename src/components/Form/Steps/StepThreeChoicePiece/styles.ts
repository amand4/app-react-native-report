import { StyleSheet } from "react-native";

import colors from "../../../../styles/colors";

const styles = StyleSheet.create({
  fields: {
    width: "100%",
    marginVertical: 10,
  },
  containerItem: {
    width: '100%',
    borderRadius: 4,
    height: 30,
    marginVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.green_light,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "space-between",

  },
  buttonText: {
    color: colors.white,
    fontSize: 14,
  },

  buttonRemove: {
    width: 50,
    height: 26,
    backgroundColor: colors.red,
    marginTop: 8,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    right: 10,
    paddingLeft: 10,
  },
  text: {
    color: colors.white,
    marginTop: 10,
  },
  icone: {
    fontSize: 20,
    color: colors.white,
  },
});

export default styles;
