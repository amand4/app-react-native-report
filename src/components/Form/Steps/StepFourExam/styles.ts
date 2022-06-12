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
    padding: 10,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 10,
    width: "50%",
  },
  buttonText: {
    fontSize: 14,
    color: colors.white,
  },
  thumbnail: {
    width: 200,
    height: 150,
    resizeMode: "contain",
    marginVertical: 10,
    borderWidth: 2,
    borderColor: colors.blue_light,
  },
  icone: {
    fontSize: 20,
    color: colors.white,
    marginLeft: 10,
  },
  footer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue",
  },
  buttonRemove: {
    width: 50,
    height: 26,
    backgroundColor: colors.red,
    marginTop: 8,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    right: 10,
    paddingLeft: 10,
  },

  containerItem: {
    width: "100%",
    borderRadius: 4,
    height: 30,
    marginVertical: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
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
  containerNumbers: {
    width: "90%",
  },
  buttonNumbers: {
    backgroundColor: colors.blue_light,
    padding: 10,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  buttonTextNumbers: {
    fontSize: 18,
    color: colors.white,
  },
});

export default styles;
