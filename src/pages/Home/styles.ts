import { StyleSheet, StatusBar } from "react-native";
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
    alignItems: "center",
  },

  cards: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  containerModal: {
    justifyContent: "center",
    backgroundColor: "red",
    alignItems: "center",
  },
  modalView: {
    height: 250,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    // width: "100%",
    marginTop: "50%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  descriptModal: {
    fontSize: 15,
  },
  containeModal: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    width: 300,
    height: 500,
  },
  scrollView: {
    marginHorizontal: 20,
  },

  button: {
    marginTop: 10,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: colors.blue_light,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    // marginBottom: 15,
    textAlign: "center",
  },
  closeModal: {
    textAlign: "right",
  },
});

export default styles;
