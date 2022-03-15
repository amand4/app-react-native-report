import React from "react";

import { Text, View, TouchableHighlight, Alert } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import colors from "../../../styles/colors";

import { useDispatch, useSelector } from "react-redux";
import report from "../../../services/database/storage";
import { resetState } from "../../../actions/todo";

import { useAuth } from "../../../hooks/auth";

import { RootState } from "../../../store";

// function BtnClose() {
export default function BtnClose() {
  const { user } = useAuth();

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const state = useSelector((state: RootState) => state.reportReducer);

  const dataKey = `@laudos_user:${user.id}`;

  const handleSubmit = function () {
    Alert.alert(
      "Tem certeza que seja encerrar o formulário?",
      "Será redirecionado para tela inicial.",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Deletar e Sair",
          onPress: () => {
            dispatch(resetState());
            navigation.navigate("VehicleSelect");
          },
        },
        {
          text: "Salvar e Sair",
          onPress: async () => {
            await report.save(dataKey, state, user, true);
            navigation.navigate("VehicleSelect");
            dispatch(resetState());
          },
        },
      ]
    );
  };
  return (
    <View style={styles.btnCloseContainer}>
      <View>
        <Text style={styles.btnCloseText}>
          <TouchableHighlight onPress={handleSubmit}>
            <AntDesign name="closecircle" size={20} color={colors.red} />
          </TouchableHighlight>
        </Text>
      </View>
    </View>
  );
}

// export { BtnClose }
