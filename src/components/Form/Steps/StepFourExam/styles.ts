import { StyleSheet } from "react-native";

import colors from "../../../../styles/colors";

const styles = StyleSheet.create({
  fields: {
    width: "100%",
    marginVertical: 10,
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
  header: {
    fontSize: 16,
    color: colors.text,
    fontWeight: "bold",
    marginVertical: 10,
  },

  headerFormContent: {
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  headerFormText: {
    fontSize: 16,
    color: colors.text,
  },
  contentForm: {
    flexDirection: "row",
  },
  separador: {
    alignContent: "center",
    alignSelf: "center",
    color: colors.blue_light,
    fontSize: 16,
    fontWeight: "bold",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    backgroundColor: colors.pupple,
    padding: 15,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 20,
    color: colors.white,
  },
  thumbnail: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginVertical: 10,
  },
  icone: {
    fontSize: 20,
    color: colors.white,
    marginLeft: 10,
  },
});

export default styles;
