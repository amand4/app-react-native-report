import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { useAuth } from "../../hooks/auth";
import styles from "./styles";

import ImageLogo from "../../assets/logo-policiacientifica.png";

import { InputLogin } from "../../components/Inputs/InputLogin/Index";

export function Login() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  // const [ehValid, setValid] = useState(false);
  // const users = ["teste", "123"];
  const { signIn, signOut } = useAuth();

  async function handleSignIn() {


    try {
      await signIn(name, password);
    } catch (error) {
      console.error();

      Alert.alert("Não foi possivel conectar na sua conta.");
    }
  }

  // const showError = () =>
  //   Alert.alert("Usuário inválido!!", "Verifique se preencheu corretamente.", [
  //     { text: "Sair" },
  //   ]);

  // const onSubmit = () => {
  //   handleSignIn();
  // if (username && password) {
  //   setValid(true);
  //   navigation.navigate("VehicleSelect");
  //   setName("");
  //   setPassword("");
  // } else {
  //   showError();
  // }
  // };

  return (
    <View style={styles.container}>
      <Image source={ImageLogo} style={styles.image} resizeMode="contain" />
      <View style={styles.boxInputs}>
        <InputLogin
          testID="input-usuario"
          placeholder="Usuário"
          onChangeText={(name) => setName(name)}
          defaultValue={name}
          value={name}
        />
        <InputLogin
          testID="input-senha"
          placeholder="Senha"
          onChangeText={(password) => setPassword(password)}
          defaultValue={password}
          value={password}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleSignIn}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Esqueceu a senha?</Text>
    </View>
  );
}