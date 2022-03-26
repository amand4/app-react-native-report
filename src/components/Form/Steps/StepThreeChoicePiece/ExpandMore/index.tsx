import React from "react";

import { Text, View, Image } from "react-native";

import styles from "./styles";

export default function ExpandMore({ item, expand }: any) {
  if (item.Data["Integro"]) {
    return (
      <View style={expand === true ? styles.container : styles.containerHide}>
        <View style={styles.title}>
          <Text style={styles.title}>
            Peça: <Text style={styles.describeIntegrated}>Adulterada</Text>
          </Text>
          <Text> Chassi: {item.Data["Integro"].Chassi.Numero}</Text>
        </View>
      </View>
    );
  }
  return (
    <View style={expand === true ? styles.container : styles.containerHide}>
      <View style={styles.title}>
        <Text style={styles.title}>
          Peça: <Text style={styles.describeAdultered}>Adulterada</Text>
        </Text>

        <Text style={styles.title}>Numerações Identificadas:</Text>
        <View>
          {item.Data["Adulterado"].Data.NumeracaoIdentificadora.map(
            (piece: any, index: number) => (
              <View key={index}>
                <Text>
                  {index + 1} - Tipo de adulteração:{" "}
                  <Text style={styles.describe}>{piece.Type}</Text>
                </Text>
                <Text>
                  {"      "}
                  Chassi:{" "}
                  <Text style={styles.describe}>{piece.Data.Numero}</Text>
                </Text>
              </View>
            )
          )}
        </View>
      </View>
    </View>
  );
}
