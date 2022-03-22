import React, { useEffect, useState } from "react";
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
  const { user } = useAuth();

  const reportDataHeader = useSelector((state: RootState) => {
    return state.reportReducer.LaudoVeicular.Data.Cabecalho;
  });

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

  const [isValid, setValid] = useState(false);

  const dispatch = useDispatch();

  const repIsValid = () => {
    return rep.length <= 2 && rep.length > 0;
  };
  const validNextStep = () => {
    if (repIsValid()) {
      setModalVisible(false);
      setValid(false);
    }
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

  return (
    <TouchableNativeFeedback onPress={Keyboard.dismiss}>
      <View style={styles.fields}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.buttonModal, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Input
          placeholder="Rep (xxxx) *"
          error={repIsValid()}
          errorMessage={"Erro: o formato deve ser: Rep (xxxx)"}
          value={String(rep)}
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
          error={oficioIsValid()}
          onChangeText={(value) => {
            const numberOfficeConvert = Number(value);
            setNumberOffice(value);
            dispatch(actions.addNumberOffice(numberOfficeConvert));
          }}
          value={String(numberOffice)}
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
          value={String(NumberInquiry)}
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

        {/* <Input
          placeholder="Perito"
          // error={peritoIsValid()}
          // errorMessage={"Erro: preencha o nome do Perito"}
          onChangeText={(value) => {
            dispatch(actions.addExpert(Number(user.id)));

            //setPerito(user.name);
          }}
          value={user.name}
          editable={false}
        /> */}

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
        <View style={styles.containerData}>
          <RectButton style={styles.button} onPress={showSolicitanteDatepicker}>
            <Text style={styles.data}>
              {formatDate(reportDataHeader.DataDeSolicitacao)}
            </Text>
          </RectButton>
        </View>
        <View style={styles.containerData}>
          <RectButton style={styles.button} onPress={showDesignacaoDatepicker}>
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
        <Footer validate={isValid}></Footer>
      </View>
    </TouchableNativeFeedback>
  );
}
