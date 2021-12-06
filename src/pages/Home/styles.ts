import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.shape,

  },

  title: {
    fontSize: 17,
    color: colors.blue_light,
    lineHeight: 20,
    textAlign: "center",
    paddingVertical: 30,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading,
  },
  vehicles: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center"

  },

  cards: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },


  modalView: {
    height: 200,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    marginTop: "50%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalListItem: {
    // height: 50,
    // backgroundColor: "red",
    marginHorizontal: 10,
    paddingHorizontal: 30,
  },

  button: {
    marginTop: 10,
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    // marginBottom: 15,
    textAlign: "center"
  },
  closeModal: {
    textAlign: "right"
  },
});

export default styles;
