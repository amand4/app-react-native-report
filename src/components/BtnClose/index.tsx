import React from "react";

import { Text, View, TouchableHighlight, Alert } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";
import colors from "../../styles/colors";


export default function BtnClose({...rest}) {


  return (
    <View style={styles.btnCloseContainer}>
      <View>
        <Text style={styles.btnCloseText}>
          <TouchableHighlight  {...rest}>
            <AntDesign name="closecircle" size={20} color={colors.red} />
          </TouchableHighlight>
        </Text>
      </View>
    </View>
  );
}
