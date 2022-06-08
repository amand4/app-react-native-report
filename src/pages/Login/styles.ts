import { StyleSheet, Dimensions } from "react-native";

import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#568FA6",
    width: "100%",
  },
  boxInputs: {
    flexDirection: "column",
    width: "100%",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  button: {
    backgroundColor: colors.yellow_light,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    height: 40,
    width: 200,
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
    color: colors.yellow_dark,
    fontSize: 12,
  },
  text: {
    color: colors.white,
    fontSize: 10,
    marginTop: 10,
  },
  image: {
    // height: Dimensions.get('window').width * 0.2,
    height: 100,
    width: 100,
  },

  horizontal: {
  
    padding: 10
  }
});

export default styles;
