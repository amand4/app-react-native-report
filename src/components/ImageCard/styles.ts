import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

const styles = StyleSheet.create({
    thumbnail: {
        width: 100,
        height: 100,
        resizeMode: "contain",
        margin: 2,
        borderWidth: 2,
        borderColor: colors.blue_light,
      },
});

export default styles;
