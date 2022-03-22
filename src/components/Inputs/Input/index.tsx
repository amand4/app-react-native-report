import React from "react";
import { Text, TextInput } from "react-native";
import colors from "../../../styles/colors";
import styles from "./styles";

interface InputProps {
  placeholder: string;
  value: any;
  onChangeText: (newValue: any) => void;
  error?: boolean;
  errorMessage?: any;
  keyboardType?: any;
  maxLength?: number;
  autoCapitalize?: any;
  autoCorrect?: boolean;
  defaultValue?: any;
  editable?: boolean;
  testID?: string;
}

export function Input({
  placeholder,
  value,
  error,
  errorMessage,
  keyboardType,
  maxLength,
  autoCapitalize,
  autoCorrect,
  defaultValue,
  editable,
  testID,
  ...rest
}: InputProps) {
  return (
    <>
      {error && errorMessage && (
        <Text style={styles.errorMessage}>{errorMessage} </Text>
      )}

      <TextInput
        style={error ? styles.inputInvalid : styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.text}
        value={value}
        editable={editable}
        maxLength={maxLength}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        defaultValue={defaultValue}
        testID={testID}
        {...rest}
      />
    </>
  );
}
