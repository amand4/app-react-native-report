import AsyncStorage from "@react-native-async-storage/async-storage";

import { Alert } from "react-native";
import { ReportCardData } from "../../components/ReportCard";

export const save = async (
  dataKey: string,
  state: ReportCardData,
  user?: any,
  edit?: boolean
) => {
  state.LaudoVeicular.Data.Cabecalho.Perito = user.id;
  try {
    const laudos = await AsyncStorage.getItem(dataKey);
    const currentLaudos = laudos ? JSON.parse(laudos) : [];

    const indexFindReport = currentLaudos.findIndex(
      (element: any) => element.LaudoVeicular.id == state.LaudoVeicular.id
    );
    if (!edit) {
      state.LaudoVeicular.statusDoLaudo.completo = true;
    }

    if (indexFindReport != -1) {
      currentLaudos[indexFindReport] = state;

      await AsyncStorage.setItem(dataKey, JSON.stringify(currentLaudos));
    } else {
      try {
        const teste = await AsyncStorage.setItem(
          dataKey,
          JSON.stringify([...currentLaudos, state])
        );
      } catch (error) {
      }
    }

    return "sucess";
  } catch (error) {
    Alert.alert("Errooo", "Não foi possível cadastrar o laudo storage");
  }
};

export const update = async (dataKey: string, state: any) => {
  try {
    const laudos = await AsyncStorage.getItem(dataKey);
    const currentLaudos = laudos ? JSON.parse(laudos) : [];
    const indexFindReport = currentLaudos.findIndex(
      (element: any) => element.LaudoVeicular.id == state.LaudoVeicular.id
    );

    if (indexFindReport != -1) {
      currentLaudos[indexFindReport] = state;

      await AsyncStorage.setItem(dataKey, JSON.stringify(currentLaudos));
    } else {
      await AsyncStorage.setItem(
        dataKey,
        JSON.stringify([...currentLaudos, state])
      );
    }

    return "sucess";
  } catch (error) {
    Alert.alert("Erro", "Não foi possível atualizar o laudo");
  }
};
const all = {
  save,
};

export default all;
