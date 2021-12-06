import React from "react";
import { Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";

export interface TypeVehicleProps extends RectButtonProps {
  title: string;
  icone: string;
  available: boolean;
  onPress: (value: {}) => void;
  enabled?: boolean;
}

export function VehicleCardPrimary({
  title,
  icone,
  available,
  ...rest
}: TypeVehicleProps) {
  if (available) {
    return (
      <RectButton style={styles.container} {...rest} testID="vehicleAvailable-test">
        <FontAwesome5 name={icone} style={styles.buttonIcon} />
        <Text style={styles.text}>{title}</Text>
      </RectButton>
    );
  }
  return (
    <RectButton style={styles.unavailable} {...rest} enabled={false} testID="vehicleUnavailable-test">
      <FontAwesome5 name={icone} style={styles.buttonIconUnavailable} />
      <Text style={styles.textUnavailable}>{title}</Text>
    </RectButton>
  );
}
