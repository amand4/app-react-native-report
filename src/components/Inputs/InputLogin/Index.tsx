import React from "react";
import {
  TextInput,
} from "react-native";
import { Value } from "react-native-reanimated";
import colors from "../../../styles/colors";

import styles from "./styles";

interface InputProps {
  placeholder: string;
  testID: string;
  onChangeText: (newValue: any) => void;
  defaultValue: any
  value: string
  secureTextEntry?: boolean

}

export function InputLogin({ placeholder, testID, defaultValue, secureTextEntry, value, ...rest }: InputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={colors.text}
      {...rest}
      testID={testID}
      defaultValue={defaultValue}
      value={value}
      secureTextEntry={secureTextEntry}
    />
  );
}
