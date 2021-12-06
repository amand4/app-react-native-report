import { StyleSheet } from "react-native";

import colors from "../../../../styles/colors";

const styles = StyleSheet.create({

  fields: {
    width: "100%",
    marginVertical: 10,
  },

  containerSelect: {
    borderWidth: 1,
    borderColor: colors.outline,
  },

  containerData: {
    borderWidth: 1,
    borderColor: colors.outline,
    marginVertical: 5,
    paddingHorizontal:2,
    backgroundColor: colors.white,
    height: 30,
  },

  select: {
    width: "100%",
    color: colors.text,
  },
  text: {
    color: colors.text,
    fontSize: 18,
    marginVertical: 5,
    paddingLeft: 10,
  },

  button: {
    height: 40,
    width: "100%",
  },

  footer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },

  data: {
   fontSize: 14,
   color: colors.text,
   marginVertical: 5,
   paddingLeft: 10,
  }
});

export default styles;
