import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

const styles = StyleSheet.create({
    btnCloseContainer: {

        margin: 5,
    },

    btnCloseText: {
        flexDirection: "column",
        alignItems: "center",
        fontSize: 12,
        textAlign: "center",
        color: colors.blue_light,
        marginHorizontal: 4
    },
});

export default styles;
