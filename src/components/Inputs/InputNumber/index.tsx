import React from "react";
import {
  TextInput,
} from "react-native";

import styles from "./styles";

interface InputProps {
  onChangeText: (newValue: any) => void;
  value: any;
  maxLength: number;
  testID: string
}

export function InputNumber({ value, maxLength, testID, ...rest }: InputProps) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      maxLength={maxLength}
      testID={testID}
      {...rest}
    />
  );
}
