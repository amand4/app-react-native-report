import React, { useState } from "react";
import { Text, View } from "react-native";
import { RadioButton } from "react-native-paper";

import styles from "./styles";
import colors from "../../../../styles/colors";

import { FormIntegrated } from "./FormIntegrated";
import { FormAdultered } from "./FormAdultered";

export function StepFourExam() {
  const [integrated, setIntegrated] = useState(true);

  const setPecaIntegra = (value: boolean) => {
    setIntegrated(value);
  };

  return (
    <>
      <View style={styles.contentInputRadio}>
        <View style={styles.InputRadio}>
          <RadioButton
            value="Integro"
            status={integrated === true ? "checked" : "unchecked"}
            color={colors.blue_light}
            onPress={() => {
              setPecaIntegra(true);
            }}
          />
          <Text style={styles.InputRadioText}>Integro</Text>
        </View>
        <View style={styles.InputRadio}>
          <RadioButton
            value="Adulterado"
            status={integrated == false ? "checked" : "unchecked"}
            onPress={() => {
              setPecaIntegra(false);
            }}
          />
          <Text style={styles.InputRadioText}>Adulterado</Text>
        </View>
      </View>
      {integrated ? (
        <FormIntegrated></FormIntegrated>
      ) : (
          <FormAdultered ></FormAdultered>
        )}
    </>
  );
}
