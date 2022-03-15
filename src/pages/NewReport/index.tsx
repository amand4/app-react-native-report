import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  SafeAreaView,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Alert,
  BackHandler,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/index";

import styles from "./styles";

import { Header } from "../../components/Header";
import { StepOneGeneralInformation } from "../../components/Form/Steps/StepOneGeneralInformation";
import { StepTwoDataBasic } from "../../components/Form/Steps/StepTwoDataBasic";
import { StepThreeChoicePiece } from "../../components/Form/Steps/StepThreeChoicePiece";
import { StepFourExam } from "../../components/Form/Steps/StepFourExam";
import { StepFiveConfirmation } from "../../components/Form/Steps/StepFiveConfirmation";

import StepsBar from "./StepsBar";
import BtnClose from "./BtnClose";

export function NewReport() {
  const navigation = useNavigation();

  const currentStep = useSelector(
    (state: RootState) => state.reportReducer.currentStep
  );

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hey!", "Tem certeza que deseja sair do formulário?", [
        {
          text: "Cancelar",
          onPress: () => null,
          style: "cancel",
        },
        { text: "Sim", onPress: () => navigation.navigate("VehicleSelect") },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View>
          <Header></Header>
        </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.content}>
              {/** Form geral */}
              <View style={styles.form}>
                {/** Steps */}
                <StepsBar />
                <BtnClose />
                {/** Step 1 */}
                <>
                  {currentStep == 1 && (
                    <>
                      <View style={styles.header}>
                        <Text style={styles.title}>
                          Etapa 1 - Informações Gerais
                        </Text>
                      </View>
                      <StepOneGeneralInformation />
                    </>
                  )}
                  {/** Step 2 */}
                  {currentStep == 2 && (
                    <>
                      <View style={styles.header}>
                        <Text style={styles.title}>
                          Etapa 2 - Dados básicos do Veículo
                        </Text>
                      </View>
                      <StepTwoDataBasic />
                    </>
                  )}
                  {/** Step 3 */}
                  {currentStep == 3 && (
                    <>
                      <View style={styles.header}>
                        <Text style={styles.title}>
                          Etapa 3 - Escolha a Peça
                        </Text>
                      </View>
                      <StepThreeChoicePiece />
                    </>
                  )}
                  {/** Step 4 */}
                  {currentStep == 4 && (
                    <>
                      <View style={styles.header}>
                        <Text style={styles.title}>Etapa 4 - Exame</Text>
                      </View>
                      <StepFourExam />
                    </>
                  )}
                  {/** Step 5 */}
                  {currentStep == 5 && (
                    <>
                      <View style={styles.header}>
                        <Text style={styles.title}>Etapa 5 - Confirmação</Text>
                      </View>
                      <StepFiveConfirmation />
                    </>
                  )}
                </>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
