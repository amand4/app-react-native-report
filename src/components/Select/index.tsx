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
  value: string | number;
  onValueChange: (newValue: string | number, itemIndex: number) => void;
  error?: boolean;
  errorMessage?: String;
  testID: string;
}

export function Select({
  options,
  value,
  error,
  errorMessage,
  testID,
  onValueChange,
}: SelectProps): JSX.Element {
  return (
    <>
      {error && errorMessage && (
        <Text style={styles.errorMessage}>{errorMessage} </Text>
      )}
      <View style={error ? styles.selectInvalid : styles.containerSelect}>
        <Picker
          style={styles.select}
          selectedValue={value}
          testID={testID}
          onValueChange={(value, index) => {
            onValueChange(value, index);
          }}
          itemStyle={{
            backgroundColor: "grey",
            color: "blue",
            fontFamily: "Ebrima",
            fontSize: 15,
          }}
        >
          {options.map((value, index) => (
            <Picker.Item
              key={index}
              label={value.label}
              value={index}
              testID={"select-option"}
            />
          ))}
        </Picker>
      </View>
    </>
  );
}
