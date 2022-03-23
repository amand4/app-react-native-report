import React, { useState } from "react";
import {
  Text,
  View,
  Platform,
  TouchableNativeFeedback,
  Keyboard,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { RectButton } from "react-native-gesture-handler";
import { useAuth } from "../../../../hooks/auth";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import { Input } from "../../../Inputs/Input";
import { NextArrowButton } from "../../../../components/Buttons/NextArrowButton";
import { BackArrowButton } from "../../../../components/Buttons/BackArrowButton";
import { Select } from "../../../Select";
import {
  typeInquerisOptions,
  orgaoSolicitanteOptions,
  directorsOptions,
  cities,
  naturezaExame,
  secao,
} from "../../../../config/constants";

import { formatDate } from "../../../../utils";
import { maskRep } from "../../../../utils/maks";
import { inputIsValid, selectIsValid } from "../../../../utils/validate";

import actions from "../../../../actions/todo";
import type { RootState } from "../../../../store/index";
import { useDispatch, useSelector } from "react-redux";

export function StepOneGeneralInformation() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { user } = useAuth();

  const reportDataHeader = useSelector((state: RootState) => {
    return state.reportReducer.LaudoVeicular.Data.Cabecalho;
  });

  const currentStep = useSelector(
    (state: RootState) => state.reportReducer.currentStep
  );

  const setCurrentStep = (value: number) => {
    dispatch(actions.updateCurrentStep(value));
  };

  const [rep, setRep] = useState("");
  const [numberOffice, setNumberOffice] = useState("");
  const [initiated, setInitiated] = useState("");
  const [typeOfInquiry, setTypeOfInquiry] = useState(0);
  const [NumberInquiry, setNumberInquiry] = useState("");
  const [city, setCity] = useState(0);
  const [director, setDirector] = useState(0);
  const [section, setSection] = useState(0);
  const [expert, setExpert] = useState(user.id);
  const [examNature, setExamNature] = useState(0);
  const [dateDesignation, setDateDesignation] = useState(new Date());
  const [dateRequest, setDateRequest] = useState(new Date());
  const [requestingAgency, setRequestingAgency] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [showDateDesig, setShowDateDesignacao] = useState(false);
  const [showDateSolit, setShowSolitacao] = useState(false);
  const [isValid, setValid] = useState(false);
  const [validateCity, setValidateCity] = useState(false);
  const [validateSection, setValidateSection] = useState(false);
  const [validateExamNature, setValidateExamNature] = useState(false);
  const [validateRequestingAgency, setValidateRequestingAgency] =
    useState(false);
  const [validateDirector, setValidateDirector] = useState(false);
  const [validateTypeInquery, setValidateTypeInquery] = useState(false);

  const nextStep = () => {
    if (
      rep &&
      numberOffice &&
      initiated &&
      typeOfInquiry &&
      city &&
      director &&
      section &&
      expert !== "" &&
      isValid
    ) {
      setCurrentStep(2);
    } else {
      Alert.alert(
        "Ops, informações inválidas!",
        "Verique se preencheu todas as informações desta etapa corretamente.",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }]
      );
    }
  };

  const previousStep = () => {
    navigation.navigate("VehicleSelect");
  };

  const showDesignacaoDatepicker = () => {
    setShowDateDesignacao(true);
  };
  const showSolicitanteDatepicker = () => {
    setShowSolitacao(true);
  };

  return (
    <TouchableNativeFeedback onPress={Keyboard.dismiss}>
      <>
        <View style={styles.fields}>
          <Input
            placeholder="Rep (xxxx) *"
            error={inputIsValid(rep)}
            errorMessage={"Erro: o formato deve ser: Rep (xxxx)"}
            value={String(rep)}
            onChangeText={(value) => {
              const repConvertNumber = Number(value);
              setRep(value);
              dispatch(actions.addRep(repConvertNumber));
              setValid(inputIsValid(rep));
            }}
            testID="input-rep"
            keyboardType="numeric"
          />

          <Input
            placeholder="Ofício **"
            errorMessage={"Erro: o número do Ofício é obrigatório"}
            error={inputIsValid(numberOffice)}
            onChangeText={(value) => {
              const numberOfficeConvert = Number(value);
              setNumberOffice(value);
              dispatch(actions.addNumberOffice(numberOfficeConvert));
              setValid(inputIsValid(numberOffice));
            }}
            value={String(numberOffice)}
            keyboardType="numeric"
            testID="input-office"
          />

          <Input
            placeholder="Indiciado"
            errorMessage={"Erro: preencha o nome  do indiciado"}
            error={inputIsValid(initiated)}
            autoCapitalize={"words"}
            onChangeText={(value) => {
              setInitiated(value);
              dispatch(actions.addInitiated(value));
              setValid(inputIsValid(initiated));
            }}
            value={initiated}
          />

          <Select
            onValueChange={(selectedValue, index) => {
              setTypeOfInquiry(index);
              dispatch(actions.addTypeOfInquiry(index));
              setValidateTypeInquery(selectIsValid(index));
              setValid(!selectIsValid(index));
            }}
            options={typeInquerisOptions}
            value={typeOfInquiry}
            error={validateTypeInquery}
            errorMessage={"Erro: Selecione o Tipo de Inquerito"}
            testID="select-typeOfInquery"
          />

          <Input
            placeholder="Inquerito"
            error={inputIsValid(NumberInquiry)}
            errorMessage={"Erro: preencha o número do Inquerito"}
            onChangeText={(value) => {
              setNumberInquiry(value);
              dispatch(actions.addNumberInquiry(Number(value)));
              setValid(inputIsValid(NumberInquiry));
            }}
            value={String(NumberInquiry)}
            keyboardType="numeric"
          />

          <Select
            onValueChange={(selectedValue, index) => {
              setCity(index);
              dispatch(actions.addCity(index));
              setValidateCity(selectIsValid(index));
              setValid(!selectIsValid(index));
            }}
            options={cities}
            value={city}
            error={validateCity}
            errorMessage={"Erro: Selecione uma Cidade"}
            testID="select-city"
          />

          <Select
            onValueChange={(selectedValue, index) => {
              setSection(index);
              dispatch(actions.addSection(index));
              setValidateSection(selectIsValid(index));
              setValid(!selectIsValid(index));
            }}
            options={secao}
            value={section}
            error={validateSection}
            errorMessage={"Erro: Selecione uma Seção"}
            testID="select-section"
          />

          <Select
            onValueChange={(selectedValue, index) => {
              setExamNature(index);
              dispatch(actions.addExamNature(index));
              setValidateExamNature(selectIsValid(index));
              setValid(!selectIsValid(index));
            }}
            options={naturezaExame}
            value={examNature}
            error={validateExamNature}
            errorMessage={"Erro: Selecione a Natureza de Exame"}
            testID="select-natureExam"
          />

          <Select
            onValueChange={(selectedValue, index) => {
              setRequestingAgency(index);
              dispatch(actions.addRequestingAgency(index));
              setValidateRequestingAgency(selectIsValid(index));
              setValid(!selectIsValid(index));
            }}
            options={orgaoSolicitanteOptions}
            value={requestingAgency}
            error={validateRequestingAgency}
            errorMessage={"Erro: Selecione um Órgão Solicitante"}
            testID="select-typeRequestingAgency"
          />

          <Select
            onValueChange={(selectedValue, index) => {
              setDirector(index);
              dispatch(actions.addDirector(index));
              setValidateDirector(selectIsValid(index));
              setValid(!selectIsValid(index));
            }}
            options={directorsOptions}
            value={director}
            error={validateDirector}
            errorMessage={"Erro: Selecione um Diretor"}
            testID="select-director"
          />
          <View style={styles.containerData}>
            <RectButton
              style={styles.button}
              onPress={showSolicitanteDatepicker}
            >
              <Text style={styles.data}>
                {formatDate(reportDataHeader.DataDeSolicitacao)}
              </Text>
            </RectButton>
          </View>
          <View style={styles.containerData}>
            <RectButton
              style={styles.button}
              onPress={showDesignacaoDatepicker}
            >
              <Text style={styles.data}>
                {formatDate(reportDataHeader.DataDeDesignacao)}
              </Text>
            </RectButton>
          </View>

          {showDateSolit && (
            <DateTimePicker
              testID="dateTimePickerSolicitacao"
              value={dateRequest}
              is24Hour={true}
              display="default"
              mode="date"
              onChange={(Event: any, selectedDate: any) => {
                const currentDate = selectedDate || dateRequest;
                setShowSolitacao(Platform.OS === "ios");
                setDateDesignation(currentDate);
                dispatch(actions.addDateRequest(selectedDate));
              }}
            />
          )}

          {showDateDesig && (
            <DateTimePicker
              testID="dateTimePickerDesignacao"
              value={dateDesignation}
              is24Hour={true}
              display="default"
              mode="date"
              onChange={(Event: any, selectedDate: any) => {
                const currentDate = selectedDate || dateDesignation;
                setShowDateDesignacao(Platform.OS === "ios");
                setDateRequest(currentDate);
                dispatch(actions.addDateDesignation(selectedDate));
              }}
            />
          )}
        </View>
        <View style={styles.footer}>
          <BackArrowButton
            title="Voltar"
            icone="arrow-left"
            onPress={previousStep}
          />
          <NextArrowButton
            title="Próximo"
            icone="arrow-right"
            onPress={nextStep}
            isValid={isValid}
          />
        </View>
      </>
    </TouchableNativeFeedback>
  );
}
