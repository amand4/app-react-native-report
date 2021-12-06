import React from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

import styles from "./style";

type OptionType = {
  value: string;
  label: string;
};

interface SelectProps {
  options: Array<OptionType>;
  value: string;
  onValueChange: (newValue: string) => void;
  error?: boolean;
  errorMessage?: String;
}

export function SelectString({
  options,
  value,
  error,
  errorMessage,
  onValueChange,
}: SelectProps) {
  return (
    <>
      {error && errorMessage && (
        <Text style={styles.errorMessage}>{errorMessage} </Text>
      )}
      <View style={error ? styles.selectInvalid : styles.containerSelect}>
        <Picker
          style={styles.select}
          selectedValue={value}
          onValueChange={(itemValue) => {
            onValueChange(itemValue);
          }}
          itemStyle={{ backgroundColor: "grey", color: "blue", fontFamily:"Ebrima", fontSize:17 }}

        >
          {options.map((value, index) => (
            <Picker.Item key={index} label={value.label} value={value.value} style={styles.selectText} />
          ))}
        </Picker>
      </View>
    </>
  );
}
