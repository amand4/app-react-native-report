import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import styles from "./styles";
import { Feather } from "@expo/vector-icons";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  icone?: string;
  isValid?: boolean;
}

export function NextArrowButton({
  title,
  icone,
  isValid,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={isValid ? styles.container : styles.containerInvalid}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={styles.buttonText}>{title}</Text>
      <Feather name="arrow-right" style={styles.icone} />
    </TouchableOpacity>
  );
}
