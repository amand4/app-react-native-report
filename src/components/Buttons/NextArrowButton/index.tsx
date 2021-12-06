import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import styles from "./styles";
import { Feather } from "@expo/vector-icons";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  icone?: string;
}

export function NextArrowButton({ title, icone, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <Text style={styles.buttonText}>{title}</Text>
      <Feather name="arrow-right" style={styles.icone} />
    </TouchableOpacity>
  );
}
