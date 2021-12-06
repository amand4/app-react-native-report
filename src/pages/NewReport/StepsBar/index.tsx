import React from "react";

import { Text, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";
import colors from "../../../styles/colors";

import { RootState } from "../../../store";
import { useSelector } from "react-redux";

const getColor = function (isSelected: Boolean) {
  if (isSelected) return colors.blue_light;
  return colors.gray_dark;
};

export default function () {
  const currentStep = useSelector(
    (state: RootState) => state.reportReducer.currentStep
  );

  return (
    <View style={styles.stepsContainer}>
      <View style={styles.stepItem}>
        <Text style={styles.stepText}>
          <AntDesign
            name="checkcircle"
            size={20}
            color={getColor(currentStep == 1)}
          />
        </Text>
        <Text style={styles.stepText}>Informações Gerais</Text>
      </View>

      <View style={styles.stepItem}>
        <Text style={styles.stepText}>
          <AntDesign
            name="checkcircle"
            size={20}
            color={getColor(currentStep == 2)}
          />
        </Text>
        <Text style={styles.stepText}> Dados do Básicos</Text>
      </View>

      <View style={styles.stepItem}>
        <Text style={styles.stepText}>
          <AntDesign
            name="checkcircle"
            size={20}
            color={getColor(currentStep == 3)}
          />
        </Text>
        <Text style={styles.stepText}>Peça</Text>
      </View>

      <View style={styles.stepItem}>
        <Text style={styles.stepText}>
          <AntDesign
            name="checkcircle"
            size={20}
            color={getColor(currentStep == 4)}
          />
        </Text>
        <Text style={styles.stepText}>Exame</Text>
      </View>

      <View style={styles.stepItem}>
        <Text style={styles.stepText}>
          <AntDesign
            name="checkcircle"
            size={20}
            color={getColor(currentStep == 5)}
          />
        </Text>
        <Text style={styles.stepText}>Confirmar</Text>
      </View>
    </View>
  );
}
