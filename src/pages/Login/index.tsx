import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { useAuth } from "../../hooks/auth";
import styles from "./styles";

import ImageLogo from "../../assets/logo-policiacientifica.png";

import { InputLogin } from "../../components/Inputs/InputLogin/Index";

export function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [didMount, setDidMount] = useState(false);

  const { signIn, signOut } = useAuth();

  async function handleSignIn() {
    setLoading(true);

    try {
      await signIn(name, password);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert(
        "Usário ou senha inválida! Tente novamente com outras credênciais"
      );
    }
  }


  useEffect(() => {
    setDidMount(true);
    return () => setDidMount(false);
  }, []);

  if (!didMount) {
    return null;
  }

  return (
    <>
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
        {loading && (
          <View style={[styles.horizontal]}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        )}

        {!loading && (
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={handleSignIn}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
}
