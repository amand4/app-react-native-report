import React from "react";
import { Image, View, TouchableOpacity, Alert } from "react-native";
import { useAuth } from "../../hooks/auth";
import { useDispatch } from "react-redux";

import ImageLogo from "../../assets/logo-policiacientifica.png";
import { resetState } from "../../actions/todo";

import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { initial_state } from "../../utils/initialState";

export function Header() {
  const { signOut } = useAuth();
  const dispatch = useDispatch();

  const handleMenu = () => {
    Alert.alert(
      "Sobre o aplicativo",
      "O App LTC (Laudo Tech Criminal) é um aplicativo para auxiliar as coletas de laudos periciais. Foi criado em 2021 pela desenvolvedora Amanda Carolino."
    );
  };

  async function handleSignOut() {
    Alert.alert("Atenção", `Tem certeza que deseja sair?`, [
      {
        text: "Não 🙏",
        style: "cancel",
      },
      {
        text: "Sim 😥",
        onPress: async () => {
          dispatch(resetState(initial_state));

          await signOut();
        },
      },
    ]);
  }
  return (
    <View style={styles.container} testID="header-test">
      <TouchableOpacity onPress={handleMenu}>
        <Image source={ImageLogo} style={styles.image} resizeMode="contain" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignOut}>
        <AntDesign
          name="logout"
          style={styles.buttonIcon}
          size={24}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
}
