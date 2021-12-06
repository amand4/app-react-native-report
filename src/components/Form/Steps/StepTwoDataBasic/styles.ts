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

  inputText: {
    borderBottomWidth: 1,
    borderColor: colors.outline,
    width: "100%",
    fontSize: 14,
    marginVertical: 5,
    paddingVertical: 2,
    paddingLeft: 10,
    height: 30,
    color: colors.text,
    backgroundColor: colors.white,
  },
  contentInputRadio: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  InputRadio: {
    flexDirection: "row",
    alignItems: "center",
    height: 30
  },
  InputRadioText: {
    fontSize: 14,
    color: colors.text,

  },
});

export default styles;
