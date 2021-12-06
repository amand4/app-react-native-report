import React from "react";
import {
  TextInput,
} from "react-native";
import colors from "../../../styles/colors";

import styles from "./styles";

interface InputViewProps {
  style?: {};
  placeholder: string;
  editable?: boolean;
  value?: any;
  selectTextOnFocus?: boolean;
  testID: string

}

export function InputView({
  placeholder,
  editable,
  selectTextOnFocus,
  value,
  testID,
  ...rest
}: InputViewProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      editable={editable}
      selectTextOnFocus={selectTextOnFocus}
      placeholderTextColor={colors.text}
      value={value}
      testID={testID}
      {...rest}
    />
  );
}
