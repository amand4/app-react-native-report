import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { RectButton } from "react-native-gesture-handler";

import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import { ReportCard, ReportCardData } from "../../components/ReportCard";
import { Header } from "../../components/Header";
import { BackArrowButton } from "../../components/Buttons/BackArrowButton";

import laudoOficial from "../../../laudoOficial.json";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import colors from "../../styles/colors";

export interface DataLitsProps extends ReportCardData {
  id: string;
}

export function MyReports() {
  const { user } = useAuth();
  const navigation = useNavigation();
  const [laudos, setLaudos] = useState<DataLitsProps[]>([]);
  const dataKey = `@laudos_user:${user.id}`;
  const [report, setReport] = useState({});
  const tokenStorageKey = "@AppAuth:token";
  const [storagedToken] = useState(
    AsyncStorage.getItem("@AppAuth:token") || ""
  );

  async function loadLaudos() {
    const response = await AsyncStorage.getItem(dataKey);

    if (response) {
      const storegedLaudos: DataLitsProps[] = response
        ? JSON.parse(response)
        : [];

      let arrayReportAvailable = [];
      for (const item of storegedLaudos) {
        if (item.LaudoVeicular.statusDoLaudo.oculto == false) {
          arrayReportAvailable.push(item);
        }
      }
      setLaudos(arrayReportAvailable);
    }
  }

  const saveData = async (laudos: any) => {
    try {
      await AsyncStorage.setItem(dataKey, JSON.stringify(laudos));

      navigation.navigate("MyReports");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível atualizar a lista de laudos");
    }
  };

  const removeReport = (value: number) => {
    for (const [index, item] of laudos.entries()) {
      if (index == value) {
        item.LaudoVeicular.statusDoLaudo.oculto = true;
      }
      setLaudos(laudos);
    }
    saveData(laudos);
  };

  const handleGoBack = () => {
    navigation.navigate("VehicleSelect");
  };

  const handleRemove = (index: number) => {
    Alert.alert("Atenção", `Tem certeza que deseja remover?`, [
      {
        text: "Não 🙏",
        style: "cancel",
      },
      {
        text: "Sim 😥",
        onPress: async () => {
          try {
            removeReport(index);
          } catch (error) {
            Alert.alert("Não foi possível remover!");
          }
        },
      },
    ]);
  };

  const toSendReport = async (report: any) => {
    const reporConvert = JSON.stringify(report);
    console.log(reporConvert);

    try {
      const response = await api.post(
        "/reports",

        reporConvert,

        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "Application/json",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);

      Alert.alert(
        "Não foi possível enviar o laudo, verifique se os dados estão corretos!"
      );
    }
  };

  useEffect(() => {
    loadLaudos();
  }, []);

  useEffect(() => {
    loadLaudos();
  }, [laudos]);

  return (
    <View style={styles.container}>
      <View>
        <Header></Header>
      </View>
      {laudos.length != 0 ? (
        <View style={styles.container}>
          <View>
            <Text style={styles.title}> Laudos </Text>
          </View>
          <View style={styles.containerLegend}>
            <Text style={styles.subtitle}> Laudo </Text>
            <Text style={styles.subtitleStatus}> Status </Text>
          </View>

          <FlatList
            data={laudos}
            renderItem={({ item: LaudoVeicular, index }) => (
              <Swipeable
                key={index}
                overshootRight={false}
                renderRightActions={() => (
                  <Animated.View>
                    <View>
                      <RectButton
                        style={styles.buttonRemove}
                        onPress={() => handleRemove(index)}
                      >
                        <Feather
                          name="trash"
                          size={20}
                          color={colors.white}
                        ></Feather>
                      </RectButton>
                    </View>
                  </Animated.View>
                )}
              >
                <TouchableOpacity onPress={() => toSendReport(LaudoVeicular)}>
                  <ReportCard data={LaudoVeicular} />
                </TouchableOpacity>
              </Swipeable>
            )}
            keyExtractor={(item) => item.LaudoVeicular.id}
          />
        </View>
      ) : (
        <View>
          <Text style={styles.textResult}>
            {" "}
            Não há nenhum registro de laudos
          </Text>
        </View>
      )}
      <View style={styles.footer}>
        <BackArrowButton
          title="Voltar"
          icone="arrow-left"
          onPress={handleGoBack}
        />
      </View>
    </View>
  );
}
