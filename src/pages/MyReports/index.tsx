import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
  Animated,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { RectButton } from "react-native-gesture-handler";

import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./styles";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import { ReportCard, ReportCardData } from "../../components/ReportCard";
import { Header } from "../../components/Header";
import { BackArrowButton } from "../../components/Buttons/BackArrowButton";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import colors from "../../styles/colors";
import { updateStatus } from "../../services/database/storage";
import { SelectString } from "../../components/Select/SelectString";
import { optionsStatusReports, pieces } from "../../config/constants";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../actions/todo";
import * as FileSystem from "expo-file-system";

export interface DataLitsProps extends ReportCardData {
  id: string;
  statusDoLaudo: {
    sincronizado: boolean;
  };
}

export function MyReports() {
  const { user, token } = useAuth();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const dataKey = `@laudos_user:${user.id}`;
  const [laudos, setLaudos] = useState<DataLitsProps[]>([]);
  const [conectionOn, setConectionOn] = useState(true);
  const [loading, setLoading] = useState(false);

  const removeReport = async (value: number) => {
    try {
      let alteredReports = laudos.filter(function (item, index) {
        return index !== value;
      });
      await AsyncStorage.setItem(dataKey, JSON.stringify(alteredReports));
      navigation.navigate("MyReports");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível deletar o laudo");
    }
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

  const handleReadPiece = async (report: any) => {
    const arrayPiecesReports = report.LaudoVeicular.Data.Veiculo.Pieces;
    for (let index = 0; index < arrayPiecesReports.length; index++) {
      const piece = arrayPiecesReports[index];
      if (piece.Data["Integro"]) {
        const fileUri =
          FileSystem.documentDirectory +
          piece.Data["Integro"].Chassi.Imagens[0];
        const contents = await FileSystem.readAsStringAsync(fileUri);
        const obj = {
          Numero: piece.Data["Integro"].Chassi.Numero,
          Imagens: [contents],
        };
        piece.Data["Integro"].Chassi.Imagens[0] = contents;
      } else {
        const arrayIdentifierNumbers =
          piece.Data.Adulterado.Data.NumeracaoIdentificadora;
        for (let index = 0; index < arrayIdentifierNumbers.length; index++) {
          const fileUri =
            FileSystem.documentDirectory +
            arrayIdentifierNumbers[index].Data.Imagens[0].base64;
          const options = {
            encoding: FileSystem.EncodingType.UTF8,
          };
          const contents = await FileSystem.readAsStringAsync(fileUri, options);

          arrayIdentifierNumbers[index].Data.Imagens[0] = contents;
        }
      }
    }
    return report;
  };
  const handleReadImage = async (report: any) => {
    const arrayGalleryLaudo = report.LaudoVeicular.Data.Veiculo.Gallery;
    for (let i = 0; i < arrayGalleryLaudo.length; i++) {
      const nameImage = arrayGalleryLaudo[i];
      const fileUri = FileSystem.documentDirectory + nameImage;
      const contents = await FileSystem.readAsStringAsync(fileUri);

      arrayGalleryLaudo[i] = contents;
    }
    return report;
  };

  const toSendReport = async (report: any) => {
    try {
      setLoading(true);
      const reportWithPieces = await handleReadPiece(report);
      const reportWithGallery = await handleReadImage(reportWithPieces);
      const convertedReport: any = JSON.stringify(reportWithGallery);

      const response: any = await api.post("/reports", convertedReport, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "Application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setLoading(false);

      await updateStatus(dataKey, report.LaudoVeicular.id);
    } catch (error: any) {
      if (error.response.status) {
        Alert.alert(
          "Ops, autênticação inválida!",
          "Para reenviar o laudo, por favor deslogue do aplicativo e logue novamente!"
        );
        setLoading(false);
      } else {
        Alert.alert(
          "Não foi possível enviar o laudo!",
          "Verifique se os dados estão corretos!"
        );
        setLoading(false);
      }
    }
  };

  const handleClick = async (report: any) => {
    Alert.alert("Atenção", `Escolha uma das opções para seguir:`, [
      {
        text: "Enviar Laudo",
        onPress: async () => {
          toSendReport(report);
        },
      },

      {
        text: "Voltar",
        style: "cancel",
      },
    ]);
  };

  useEffect(() => {
    async function loadReport() {
      const response = await AsyncStorage.getItem(dataKey);

      if (response) {
        const storegedLaudos: DataLitsProps[] = response
          ? JSON.parse(response)
          : [];

        setLaudos(storegedLaudos);
        return storegedLaudos;
      }
    }
    loadReport();
  }, []);

  useEffect(() => {
    async function loadReport() {
      const response = await AsyncStorage.getItem(dataKey);

      if (response) {
        const storegedLaudos: DataLitsProps[] = response
          ? JSON.parse(response)
          : [];

        setLaudos(storegedLaudos);
        return storegedLaudos;
      }
    }
    loadReport();
  }, [laudos]);

  useEffect(() => {
    async function getStatusApi() {
      try {
        const response = await api.get("/status");
        if (response.data == "sucess") {
          setConectionOn(true);
        } else {
          setConectionOn(false);
        }
      } catch (error) {
        setConectionOn(false);
      }
    }

    getStatusApi();
    return () => {
      setConectionOn(false);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Header></Header>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}> Laudos </Text>
        </View>
        {conectionOn ? (
          <View style={styles.containerMessageConectionSucess}>
            <MaterialIcons
              name="wifi"
              size={20}
              color="white"
              style={styles.icon}
            />

            <View>
              <Text style={styles.containerMessageConectionTextTitle}>
                Conectado à internet!
              </Text>
              <Text style={styles.containerMessageConectionText}>
                {" "}
                Envie o laudo agora mesmo.{" "}
              </Text>
            </View>
          </View>
        ) : (
          <View style={styles.containerMessageConection}>
            <MaterialIcons
              name="wifi-off"
              size={20}
              color="white"
              style={styles.icon}
            />

            <View>
              <Text style={styles.containerMessageConectionTextTitle}>
                Ooops, sem conexão com internet!!!
              </Text>
              <Text style={styles.containerMessageConectionText}>
                {" "}
                Conecte a rede Wifi.{" "}
              </Text>
            </View>
          </View>
        )}

        <View style={styles.containerLegend}>
          <Text style={styles.subtitle}> Laudo </Text>
          <Text style={styles.subtitleStatus}> Status </Text>
        </View>
        {loading && (
          <View style={styles.horizontal}>
            <ActivityIndicator size="large" color={colors.blue_light} />
            <Text style={styles.textLoading}>Enviando, aguarde...</Text>
          </View>
        )}
        {!loading && (
          <View>
            {laudos.length != 0 ? (
              <FlatList
                data={laudos}
                renderItem={({ item: LaudoVeicular, index }) => (
                  <Swipeable
                    key={index}
                    overshootRight={false}
                    overshootLeft={false}
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
                    {LaudoVeicular.LaudoVeicular.statusDoLaudo.sincronizado ? (
                      <ReportCard data={LaudoVeicular} />
                    ) : (
                      <TouchableOpacity
                        onPress={() => handleClick(LaudoVeicular)}
                      >
                        <ReportCard data={LaudoVeicular} />
                      </TouchableOpacity>
                    )}
                  </Swipeable>
                )}
                keyExtractor={(item: any) => item.LaudoVeicular.id}
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
