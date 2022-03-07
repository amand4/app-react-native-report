import React, { useEffect, useState } from "react";
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

import styles from "./styles";

import { Input } from "../../../Inputs/Input";
import { InputView } from "../../../Inputs/InputView";

import { Select } from "../../../Select";
import { Footer } from "../../../Footer";
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
import { useDispatch, useSelector } from "react-redux";

import actions from "../../../../actions/todo";

import type { RootState } from "../../../../store/index";

export function StepOneGeneralInformation() {
  const [showDateDesig, setShowDateDesignacao] = useState(false);
  const [showDateSolit, setShowSolitacao] = useState(false);
  const [valid, setValid] = useState(false);
  const { user } = useAuth();

  const reportDataHeader = useSelector((state: RootState) => {
    return state.reportReducer.LaudoVeicular.Data.Cabecalho;
  });

  const [rep, setRep] = useState(reportDataHeader.Rep);
  const [numberOffice, setNumberOffice] = useState(0);
  const [initiated, setInitiated] = useState("");
  const [typeOfInquiry, setTypeOfInquiry] = useState(0);
  const [NumberInquiry, setNumberInquiry] = useState(0);
  const [city, setCity] = useState(0);
  const [director, setDirector] = useState(0);
  const [section, setSection] = useState(0);
  const [expert, setExpert] = useState(user.id);
  const [examNature, setExamNature] = useState(0);
  const [dateDesignation, setDateDesignation] = useState(new Date());
  const [dateRequest, setDateRequest] = useState(new Date());
  const [requestingAgency, setRequestingAgency] = useState(0);

  const dispatch = useDispatch();

  const repIsValid = () => {
    return false;
  };

  const oficioIsValid = () => {
    return false;
  };

  const indiciadoIsValid = () => {};

  const tipoDeInqueritoIsValid = () => {};

  const nrdoInqueritoIsValid = () => {
    // // return data.NrdoInquerito.length <= 2 && data.NrdoInquerito.length > 0;
  };

  const cidadeIsValid = () => {};

  const orgaoIsValid = () => {};

  const diretorIsValid = () => {
    // return data.Diretor === 0;
  };

  const naturezaDoExameIsValid = () => {
    // return data.NaturezaDoExame === 0;
  };

  const secaoIsValid = () => {
    // return data.Secao === 0;
  };

  const showDesignacaoDatepicker = () => {
    setShowDateDesignacao(true);
  };
  const showSolicitanteDatepicker = () => {
    setShowSolitacao(true);
  };

  const isValid = () => {
    return false;
  };

  return (
    <TouchableNativeFeedback onPress={Keyboard.dismiss}>
      <View style={styles.fields}>
        <Input
          placeholder="Rep (xxxx/2021) *"
          error={repIsValid()}
          errorMessage={"Erro: o formato deve ser: Rep (xxxx/yyyy)"}
          value={rep}
          onChangeText={(value) => {
            const teste = Number(value);
            setRep(teste);
            dispatch(actions.addRep(teste));
          }}
          defaultValue={rep}
          testID="input-rep"
          keyboardType="numeric"
        />

        <Input
          placeholder="Ofício **"
          errorMessage={"Erro: o número do Ofício é obrigatório"}
          error={oficioIsValid()}
          onChangeText={(value) => {
            const teste = Number(value);
            setNumberOffice(teste);
            dispatch(actions.addNumberOffice(teste));
          }}
          value={numberOffice}
          keyboardType="numeric"
        />

        <Input
          placeholder="Indiciado"
          errorMessage={"Erro: preencha o nome  do indiciado"}
          // error={indiciadoIsValid()}
          autoCapitalize={"words"}
          onChangeText={(value) => {
            setInitiated(value);
            dispatch(actions.addInitiated(value));
          }}
          value={initiated}
        />

        <Select
          onValueChange={(selectedValue, index) => {
            setTypeOfInquiry(index);
            dispatch(actions.addTypeOfInquiry(index));
          }}
          options={typeInquerisOptions}
          value={typeOfInquiry}
          // error={tipoDeInqueritoIsValid()}

          errorMessage={"Erro: Selecione o Tipo de Inquerito"}
          testID="select-typeOfInquery"
        />

        <Input
          placeholder="Inquerito"
          // error={nrdoInqueritoIsValid()}
          errorMessage={"Erro: preencha o número do Inquerito"}
          onChangeText={(value) => {
            setNumberInquiry(value);
            dispatch(actions.addNumberInquiry(Number(value)));

            // setInquerito(value);
          }}
          value={NumberInquiry}
          keyboardType="numeric"
        />

        <Select
          onValueChange={(selectedValue, index) => {
            setCity(index);
            dispatch(actions.addCity(index));
          }}
          options={cities}
          value={city}
          //  error={cidadeIsValid()}
          errorMessage={"Erro: Selecione uma Cidade"}
          testID="select-city"
        />

        <Input
          placeholder="Perito"
          // error={peritoIsValid()}
          // errorMessage={"Erro: preencha o nome do Perito"}
          onChangeText={(value) => {
            dispatch(actions.addExpert(Number(user.id)));

            //setPerito(user.name);
          }}
          value={user.name}
          editable={false}
        />

        <Select
          onValueChange={(selectedValue, index) => {
            setSection(index);
            dispatch(actions.addSection(index));
          }}
          options={secao}
          value={section}
          //error={secaoIsValid()}
          errorMessage={"Erro: Selecione uma Seção"}
          testID="select-section"
        />

        <Select
          onValueChange={(selectedValue, index) => {
            setExamNature(index);
            dispatch(actions.addExamNature(index));
          }}
          options={naturezaExame}
          value={examNature}
          // error={naturezaDoExameIsValid()}
          errorMessage={"Erro: Selecione a Natureza de Exame"}
          testID="select-natureExam"
        />

        <Select
          onValueChange={(selectedValue, index) => {
            setRequestingAgency(index);
            dispatch(actions.addRequestingAgency(index));
          }}
          options={orgaoSolicitanteOptions}
          value={requestingAgency}
          // error={orgaoIsValid()}
          errorMessage={"Erro: Selecione um Órgão Solicitante"}
          testID="select-typeRequestingAgency"
        />

        <Select
          onValueChange={(selectedValue, index) => {
            setDirector(index);
            dispatch(actions.addDirector(index));
          }}
          options={directorsOptions}
          value={director}
          // error={diretorIsValid()}
          errorMessage={"Erro: Selecione um Diretor"}
          testID="select-director"
        />
        {/* <View style={styles.containerData}>
          <RectButton style={styles.button} onPress={showSolicitanteDatepicker}>
            <Text style={styles.data}>
              {reportDataHeader.DataDeSolicitacao}
            </Text>
          </RectButton>
        </View>
        <View style={styles.containerData}>
          <RectButton style={styles.button} onPress={showDesignacaoDatepicker}>
            <Text style={styles.data}>{taDeDesignacao}</Text>
          </RectButton>
        </View> */}

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
            }}
          />
        )}
        <Footer validate={isValid}></Footer>
      </View>
    </TouchableNativeFeedback>
  );
}
