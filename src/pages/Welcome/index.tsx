import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
  View,
} from "react-native";
import ImageLogo from "../../assets/logo-policiacientifica.png";

import { useNavigation } from "@react-navigation/core";
import styles from "./styles";

export function Welcome() {
  const navigation = useNavigation();

  const handleStart = () => {
    navigation.navigate("VehicleSelect");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={ImageLogo} style={styles.image} resizeMode="contain" />
        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.subtitle}>
          Para iniciar o Exame de Identificação Veícular crie uma conta ou
          acesse sua conta ja criada :)
        </Text>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleStart}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
