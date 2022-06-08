import React, { useState } from "react";
import {
  Text,
  View,
  Platform,
  TouchableNativeFeedback,
  Keyboard,
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

import { formatEditDate, formatNewDate } from "../../../../utils";
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

  const setCurrentStep = (value: number) => {
    dispatch(actions.updateCurrentStep(value));
  };

  const [rep, setRep] = useState(reportDataHeader.Rep);
  const [numberOffice, setNumberOffice] = useState(reportDataHeader.NrdoOficio);
  const [initiated, setInitiated] = useState(reportDataHeader.Indiciado);
  const [typeOfInquiry, setTypeOfInquiry] = useState(
    reportDataHeader.TipoDeInquerito
  );
  const [numberInquiry, setNumberInquiry] = useState(
    reportDataHeader.NrdoInquerito
  );
  const [city, setCity] = useState(reportDataHeader.Cidade);
  const [director, setDirector] = useState(reportDataHeader.Diretor);
  const [section, setSection] = useState(reportDataHeader.Secao);
  const [expert, setExpert] = useState(user.id);
  const [examNature, setExamNature] = useState(
    reportDataHeader.NaturezaDoExame
  );
  const [dateDesignation, setDateDesignation] = useState(
    reportDataHeader.DataDeDesignacao
  );
  const [dateRequest, setDateRequest] = useState(
    reportDataHeader.DataDeSolicitacao
  );
  const [requestingAgency, setRequestingAgency] = useState(
    reportDataHeader.OrgaoSolicitante
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [showDateDesig, setShowDateDesignacao] = useState(false);
  const [showDateSolit, setShowSolitacao] = useState(false);
  const [isValid, setValid] = useState(true);
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
      initiated !== "" &&
      typeOfInquiry &&
      city &&
      director &&
      section &&
      examNature &&
      requestingAgency !== 0 &&
      isValid
    ) {
      setCurrentStep(2);
    } else {
      Alert.alert(
        "Ops, informações inválidas!",
        "Verifique se preencheu todas as informações desta etapa corretamente.",
        [{ text: "OK" }]
      );
    }
  };

  const previousStep = () => {
    Alert.alert(
      "Tem certeza que deseja encerrar o formulário?",
      "Será redirecionado para tela inicial.",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Não",
        },
        {
          text: "Sim",
          onPress: async () => {
            navigation.navigate("VehicleSelect");
          },
        },
      ]
    );
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
            value={String(reportDataHeader.Rep)}
            onChangeText={(value) => {
              const repConvertNumber = Number(value);
              setRep(value);
              dispatch(actions.addRep(repConvertNumber));
            }}
            testID="input-rep"
            keyboardType="numeric"
          />

          <Input
            placeholder="Ofício **"
            errorMessage={"Erro: o número do Ofício é obrigatório"}
            error={inputIsValid(String(numberOffice))}
            onChangeText={(value) => {
              const numberOfficeConvert = Number(value);
              setNumberOffice(value);
              dispatch(actions.addNumberOffice(numberOfficeConvert));
            }}
            value={String(reportDataHeader.NrdoOficio)}
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
            }}
            value={reportDataHeader.Indiciado}
          />

          <Select
            onValueChange={(selectedValue, index) => {
              setTypeOfInquiry(index);
              dispatch(actions.addTypeOfInquiry(index));
              setValidateTypeInquery(selectIsValid(index));
            }}
            options={typeInquerisOptions}
            value={reportDataHeader.TipoDeInquerito}
            error={validateTypeInquery}
            errorMessage={"Erro: Selecione o Tipo de Inquerito"}
            testID="select-typeOfInquery"
          />

          <Input
            placeholder="Inquerito"
            error={inputIsValid(String(numberInquiry))}
            errorMessage={"Erro: preencha o número do Inquerito"}
            onChangeText={(value) => {
              setNumberInquiry(value);
              dispatch(actions.addNumberInquiry(Number(value)));
            }}
            value={String(reportDataHeader.NrdoInquerito)}
            keyboardType="numeric"
          />

          <Select
            onValueChange={(selectedValue, index) => {
              setCity(index);
              dispatch(actions.addCity(index));
              setValidateCity(selectIsValid(index));
            }}
            options={cities}
            value={reportDataHeader.Cidade}
            error={validateCity}
            errorMessage={"Erro: Selecione uma Cidade"}
            testID="select-city"
          />

          <Select
            onValueChange={(selectedValue, index) => {
              setSection(index);
              dispatch(actions.addSection(index));
              setValidateSection(selectIsValid(index));
            }}
            options={secao}
            value={reportDataHeader.Secao}
            error={validateSection}
            errorMessage={"Erro: Selecione uma Seção"}
            testID="select-section"
          />

          <Select
            onValueChange={(selectedValue, index) => {
              setExamNature(index);
              dispatch(actions.addExamNature(index));
              setValidateExamNature(selectIsValid(index));
            }}
            options={naturezaExame}
            value={reportDataHeader.NaturezaDoExame}
            error={validateExamNature}
            errorMessage={"Erro: Selecione a Natureza de Exame"}
            testID="select-natureExam"
          />

          <Select
            onValueChange={(selectedValue, index) => {
              setRequestingAgency(index);
              dispatch(actions.addRequestingAgency(index));
              setValidateRequestingAgency(selectIsValid(index));
            }}
            options={orgaoSolicitanteOptions}
            value={reportDataHeader.OrgaoSolicitante}
            error={validateRequestingAgency}
            errorMessage={"Erro: Selecione um Órgão Solicitante"}
            testID="select-typeRequestingAgency"
          />

          <Select
            onValueChange={(selectedValue, index) => {
              setDirector(index);
              dispatch(actions.addDirector(index));
              setValidateDirector(selectIsValid(index));
            }}
            options={directorsOptions}
            value={reportDataHeader.Diretor}
            error={validateDirector}
            errorMessage={"Erro: Selecione um Diretor"}
            testID="select-director"
          />
          <View style={styles.containerData}>
            <RectButton
              style={styles.button}
              onPress={showSolicitanteDatepicker}
            >
              {reportDataHeader.DataDeSolicitacao instanceof Date ? (
                <Text style={styles.data}>
                  {`Data Solicitação: ${formatNewDate(
                    reportDataHeader.DataDeSolicitacao
                  )}`}
                </Text>
              ) : (
                <Text style={styles.data}>
                  {`Data Solicitação: ${formatNewDate(
                    reportDataHeader.DataDeSolicitacao
                  )}`}
                </Text>
              )}
            </RectButton>
          </View>
          <View style={styles.containerData}>
            <RectButton
              style={styles.button}
              onPress={showDesignacaoDatepicker}
            >
              <Text style={styles.data}>
                {`Data Designação: ${formatNewDate(
                  reportDataHeader.DataDeDesignacao
                )}`}
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
