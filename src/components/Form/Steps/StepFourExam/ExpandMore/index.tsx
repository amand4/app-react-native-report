import React from "react";

import { Text, View, Image } from "react-native";

import styles from "./styles";

export default function ExpandMore({ item, index, expand }: any) {
  return (
    <View style={expand === true ? styles.container : styles.containerHide}>
      <View style={styles.title}>
        <Text style={styles.title}>Numeração Identificada:</Text>
        <View>
          <View>
            <Text>
              Chassi: <Text style={styles.describe}>{item["Data"].Numero}</Text>
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Image
          key={index}
          source={{
            uri: `data:image/png;base64,${item["Data"].Imagens[0]["base64"]}`,
          }}
          style={styles.thumbnail}
        />
      </View>
    </View>
  );
}
