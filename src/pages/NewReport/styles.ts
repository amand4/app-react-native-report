import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.shape,
  },

  content: {
    flex: 1,
    width: "100%",
  },

  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    alignItems: "center",
    flexDirection: "row",

  },

  fields: {
    width: "100%",
    marginVertical: 10,
  },

  containerSelect: {
    borderWidth: 1,
    borderColor: colors.outline,
  },

  title: {
    fontSize: 18,
    lineHeight: 18,
    textAlign: "center",
    color: colors.formHeading,
    fontWeight: "bold",
    marginTop: 10,
  },

  scrollView: {
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },

  inputText: {
    borderBottomWidth: 1,
    borderColor: colors.outline,
    width: "100%",
    fontSize: 18,
    marginVertical: 5,
    paddingVertical: 10,
    paddingLeft: 10,
    height: 40,
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
  },

  InputRadioText: {
    fontSize: 16,
    color: colors.text,
  },

  footer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
});

export default styles;
