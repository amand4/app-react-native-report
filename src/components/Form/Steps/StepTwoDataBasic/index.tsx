import React, { useState } from "react";
import { Text, View, Alert } from "react-native";
import { RadioButton } from "react-native-paper";

import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import {
  marcaOptions,
  modeloOptions,
  optionsColors,
} from "../../../../config/constants";
import { maskPlaca } from "../../../../utils/maks";

import styles from "./styles";
import colors from "../../../../styles/colors";

import { Input } from "../../../Inputs/Input";
import { Select } from "../../../Select";
import { NextArrowButton } from "../../../../components/Buttons/NextArrowButton";
import { BackArrowButton } from "../../../../components/Buttons/BackArrowButton";

import actions from "../../../../actions/todo";
import { inputIsValid, selectIsValid } from "../../../../utils/validate";

import type { RootState } from "../../../../store/index";

export function StepTwoDataBasic() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const reportDataVehicle = useSelector((state: RootState) => {
    return state.reportReducer.LaudoVeicular.Data.Veiculo.Data;
  });

  const [plate, setPlate] = useState(reportDataVehicle.Placa);
  const [model, setModel] = useState(reportDataVehicle.Modelo);
  const [brand, setBrand] = useState(reportDataVehicle.Marca);
  const [yearModelFab, setYearModelFab] = useState(
    reportDataVehicle.AnoModeloFab
  );
  const [color, setColor] = useState(reportDataVehicle.Cor);
  const [conservationState, setConservationState] = useState(
    reportDataVehicle.EstadoDeConservacao
  );
  const [isValid, setValid] = useState(true);
  const [validateBrand, setValidateBrand] = useState(false);
  const [validateModel, setValidateModel] = useState(false);
  const [validateColor, setValidateColor] = useState(false);
  const setCurrentStep = (value: number) => {
    dispatch(actions.updateCurrentStep(value));
  };

  const nextStep = () => {
    if (
      plate &&
      yearModelFab &&
      color !== "" &&
      model &&
      brand &&
      conservationState !== 0 &&
      isValid
    ) {
      setCurrentStep(3);
    } else {
      Alert.alert(
        "Ops, informações inválidas!",
        "Verifique se preencheu todas as informações desta etapa corretamente.",
        [{ text: "OK" }]
      );
    }
  };

  const previousStep = () => {
    setCurrentStep(1);
  };

  return (
    <View style={styles.fields}>
      <Input
        placeholder="Placa *"
        value={plate}
        error={inputIsValid(plate)}
        errorMessage={"Erro: Preencha a Placa"}
        onChangeText={(value) => {
          const placaFormated = value;
          setPlate(value);
          dispatch(actions.addPlate(value));
        }}
        maxLength={7}
      />

      <Select
        onValueChange={(selectedValue, index) => {
          setBrand(index);
          dispatch(actions.addBrand(index));
          setValidateBrand(selectIsValid(index));
        }}
        options={marcaOptions}
        value={brand}
        error={validateBrand}
        errorMessage={"Erro: Selecione uma Marca"}
        testID="select-brand"
      />

      <Select
        onValueChange={(selectedValue, index) => {
          setModel(index);
          dispatch(actions.addModel(index));
          setValidateModel(selectIsValid(index));
        }}
        options={modeloOptions}
        value={model}
        error={validateModel}
        errorMessage={"Erro: Selecione um modelo"}
        testID="select-model"
      />

      <Input
        placeholder="Ano/Modelo/Fab."
        onChangeText={(value) => {
          setYearModelFab(value);
          dispatch(actions.addYearModelFab(value));
        }}
        value={yearModelFab}
        error={inputIsValid(yearModelFab)}
        errorMessage={"Erro: preencha o Ano/Modelo/Fab"}
      />

      <Select
        onValueChange={(selectedValue, index) => {
          setColor(optionsColors[index].value);
          dispatch(actions.addColor(optionsColors[index].value));
          setValidateColor(selectIsValid(index));
        }}
        options={optionsColors}
        value={color}
        error={validateColor}
        errorMessage={"Erro: Selecione uma cor"}
        testID="select-color"
      />

      <Text style={styles.inputText}>Estado de Conservação</Text>
      <View style={styles.contentInputRadio}>
        <View style={styles.InputRadio}>
          <RadioButton
            value="Bom"
            status={conservationState === 1 ? "checked" : "unchecked"}
            color={colors.blue_light}
            onPress={() => {
              setConservationState(1);
              dispatch(actions.addConservationState(1));
            }}
          />
          <Text style={styles.InputRadioText}>Bom</Text>
        </View>

        <View style={styles.InputRadio}>
          <RadioButton
            value="Regular"
            status={conservationState === 2 ? "checked" : "unchecked"}
            onPress={() => {
              setConservationState(2);
              dispatch(actions.addConservationState(2));
            }}
          />
          <Text style={styles.InputRadioText}>Regular</Text>
        </View>

        <View style={styles.InputRadio}>
          <RadioButton
            value="Mau"
            status={conservationState === 3 ? "checked" : "unchecked"}
            onPress={() => {
              setConservationState(3);
              dispatch(actions.addConservationState(3));
            }}
          />
          <Text style={styles.InputRadioText}>Mau</Text>
        </View>
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
    </View>
  );
}
