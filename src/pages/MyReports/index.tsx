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

import { Select } from "../../../src/components/Select";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import colors from "../../styles/colors";
import { update } from "../../services/database/storage";
import { SelectString } from "../../components/Select/SelectString";

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
  const [filter, setFilter] = useState("todos");

  const [storagedToken] = useState(
    AsyncStorage.getItem("@AppAuth:token") || ""
  );

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

  const handleFilteredReportsSincronized = (status: boolean) => {
    const newArray = laudos.filter((item) => {
      return item.LaudoVeicular.statusDoLaudo.sincronizado === status;
    });
    return setLaudos(newArray);
  };

  const handleFilteredReportsIncomplet = (status: boolean) => {
    const newArray = laudos.filter((item) => {
      return item.LaudoVeicular.statusDoLaudo.completo === status;
    });
    return setLaudos(newArray);
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
      report.LaudoVeicular.statusDoLaudo.sincronizado = true;
      await update(dataKey, report);
      console.log(response.data);
    } catch (error) {
      console.log(reporConvert);

      console.log(error);

      Alert.alert(
        "Não foi possível enviar o laudo, verifique se os dados estão corretos!"
      );
    }
  };

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
      return arrayReportAvailable;
    }
  }
  useEffect(() => {
    loadLaudos();
  }, []);

  useEffect(() => {
    if (filter == "enviados") {
      handleFilteredReportsSincronized(true);
    }
    if (filter == "incompletos") {
      handleFilteredReportsIncomplet(false);
    }
    if (filter == "todos") {
      loadLaudos();
    }
    if (filter == "aguardandoEnvio") {
      handleFilteredReportsSincronized(false);
    }
  }, [filter]);

  return (
    <View style={styles.container}>
      <View>
        <Header></Header>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}> Laudos </Text>
        </View>
        <View>
          <View>
            <SelectString
              onValueChange={(selectedValue) => {
                setFilter(selectedValue);
              }}
              options={[
                { value: "todos", label: "todos" },

                { value: "incompletos", label: "incompletos" },
                { value: "enviados", label: "enviados" },
                { value: "aguardandoEnvio", label: "Aguardando Envio" },
              ]}
              value={filter}
              errorMessage={"Erro: Selecione o Tipo de numeração"}
            />
          </View>
        </View>
        <View style={styles.containerLegend}>
          <Text style={styles.subtitle}> Laudo </Text>
          <Text style={styles.subtitleStatus}> Status </Text>
        </View>
        {laudos.length != 0 ? (
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
        ) : (
          <View>
            <Text style={styles.textResult}>
              {" "}
              Não há nenhum registro de laudos
            </Text>
          </View>
        )}
      </View>

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
