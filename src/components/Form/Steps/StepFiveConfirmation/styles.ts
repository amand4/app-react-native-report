import { StyleSheet } from "react-native";

import colors from "../../../../styles/colors";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 10,
  },
  fields: {
    flexDirection: "column",
  },
  contentField: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  fieldText: {
    minWidth: 70,
    textAlign: "left",
  },
  field: {
    width: "65%"
  },

  text: {
    color: colors.text,
    fontSize: 14,
    textAlign: "left",

    flexWrap: "wrap"
  },
  button: {
    backgroundColor: colors.green_light,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 4,
    height: 30,
    marginVertical: 4,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: colors.white,
    fontSize: 14,
  },
  buttonVehicle: {
    backgroundColor: colors.blue_light,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 4,
    height: 30,
    width: "100%",
    marginVertical: 2,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  icone: {
    fontSize: 20,
    color: colors.white,
  },
  contentRadioButton: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10
  },
  headerFormContent: {
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    fontSize: 16,
    color: colors.text,
    fontWeight: "bold",
    marginVertical: 10,
  },
  containerGalery: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  buttonAdd: {
    backgroundColor: colors.pupple,
    padding: 4,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 10,
    width: "50%"
  },
  buttonAddText: {
    color: colors.white,
    fontSize: 14,
  },
  contentButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  thumbnail: {
    width: 100,
    height: 100,
    // resizeMode: "contain",
    marginVertical: 5,
  },
});

export default styles;
