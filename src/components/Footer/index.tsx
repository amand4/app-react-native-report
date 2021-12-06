import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../hooks/auth";

import { useNavigation } from "@react-navigation/native";

import { View, Alert } from "react-native";

import styles from "./styles";

import { RootState } from "../../store";
import actions from "../../actions/todo"
import { NextArrowButton } from "../../components/Buttons/NextArrowButton";
import { BackArrowButton } from "../../components/Buttons/BackArrowButton";
import { FinalArrowButton } from "../../components/Buttons/FinalArrowButton";

import AsyncStorage from "@react-native-async-storage/async-storage";
import report from "../../services/database/storage";

interface StepOneGeneralInformationProps {
  validate: () => boolean;
}
export function Footer(props: StepOneGeneralInformationProps) {

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { user } = useAuth();

  let state = useSelector((state: RootState) => state.reportReducer);

  const currentStep = state.currentStep;
  const pieces = state.LaudoVeicular.Data.Veiculo.Pieces;

  const dataKey = `@laudos_user:${user.id}`;

  const handleSubmit = async () => {
    try {
      const response = await report.save(dataKey, state);
      // const laudos = await AsyncStorage.getItem(dataKey);
      // const currentLaudos = laudos ? JSON.parse(laudos) : [];
      // const indexFindReport = currentLaudos.findIndex((element: any) => element.LaudoVeicular.id == state.LaudoVeicular.id);

      // state.LaudoVeicular.statusDoLaudo.completo = true;

      // if (indexFindReport) {
      //   currentLaudos[indexFindReport] = state


      //   await AsyncStorage.setItem(
      //     dataKey,
      //     JSON.stringify(currentLaudos)
      //   );
      // } else {
      //   await AsyncStorage.setItem(
      //     dataKey,
      //     JSON.stringify([...currentLaudos, state])
      //   );

      navigation.navigate("MyReports");
      setCurrentStep(1);
      dispatch(actions.resetState());
    } catch (error) {
      Alert.alert("Erro", "Não foi possível cadastrar o laudo");
    }

  };

  const setCurrentStep = (value: number) => {
    dispatch(actions.updateCurrentStep(value));
  };

  const nextStep = () => {
    const validate = true; // para testes
    // const validate = props.validate();

    if (validate) {
      if (currentStep < 5) {
        const value = currentStep + 1;
        setCurrentStep(value);
      }
    }

    if (currentStep == 5) {
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      const value = currentStep - 1;
      setCurrentStep(value);
    }
  };

  const lastStep = () => {
    const validate = props.validate();
    if (validate) {
      const value = currentStep + 2;
      setCurrentStep(value);
    }
  };
  return (
    <View style={styles.footer}>
      <View style={styles.button}>
        {currentStep == 1 && (
          <>
            <BackArrowButton
              title="Voltar"
              icone="arrow-left"
              onPress={previousStep}
            />
            <NextArrowButton
              title="Próximo"
              icone="arrow-right"
              onPress={nextStep}
            />
          </>
        )}
        {currentStep == 2 && (
          <>
            <BackArrowButton
              title="Voltar"
              icone="arrow-left"
              onPress={previousStep}
            />
            <NextArrowButton
              title="Próximo"
              icone="arrow-right"
              onPress={nextStep}
            />
          </>
        )}
        {currentStep == 4 && (
          <>
            <BackArrowButton
              title="Voltar"
              icone="arrow-left"
              onPress={previousStep}
            />
          </>
        )}
      </View>
      {currentStep === 3 && (
        <>
          <View style={styles.button}>
            <BackArrowButton
              title="Voltar"
              icone="arrow-left"
              onPress={previousStep}
            />
            <NextArrowButton
              title="Próximo"
              icone="arrow-right"
              onPress={nextStep}
            />
          </View>
          <FinalArrowButton
            title="Concluir"
            icone="arrow-right"
            onPress={lastStep}
          />
        </>
      )}
      {currentStep === 5 && (
        <>
          <View style={styles.button}>
            <BackArrowButton
              title="Voltar"
              icone="arrow-left"
              onPress={previousStep}
            />
            <NextArrowButton
              title="Confirmar"
              icone="arrow-right"
              onPress={handleSubmit}
            />
          </View>
        </>
      )}
    </View>
  );
}
