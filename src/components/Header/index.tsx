import React from "react";
import { Image, View, TouchableOpacity, Alert } from "react-native";
import { useAuth } from "../../hooks/auth";

import ImageLogo from "../../assets/logo-policiacientifica.png";

import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";

export function Header() {
  const { signOut } = useAuth();

  // const handleMenu = () => {
  //   Alert.alert(
  //     "Sobre o aplicativo",
  //     "O App X é um aplicativo para auxiliar nas coletas de laudos periciais. Foi criado em 2021 pela desenvolvedora Amanda Carolino"
  //   );
  // };

  //função deslogar
  async function handleSignOut() {
    await signOut();
  }
  return (
    <View style={styles.container} testID="header-test">
      <Image source={ImageLogo} style={styles.image} resizeMode="contain" />
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
