import React, { useState } from "react";
import { Text, View, Alert } from "react-native";
import { RadioButton } from "react-native-paper";

import { useDispatch } from "react-redux";

import { marcaOptions, modeloOptions } from "../../../../config/constants";
import { maskPlaca } from "../../../../utils/maks";

import styles from "./styles";
import colors from "../../../../styles/colors";


import { Input } from "../../../Inputs/Input";
import { Select } from "../../../Select";
import { Footer } from "../../../Footer";

import actions from '../../../../actions/todo'

export function StepTwoDataBasic() {

  const [plate, setPlate] = useState("");
  const [model, setModel] = useState(0);
  const [brand, setBrand] = useState(0);
  const [yearModelFab, setYearModelFab] = useState("");
  const [color, setColor] = useState("");
  const [conservationState, setConservationState] = useState(0);

  const dispatch = useDispatch();

  const placaIsValid = () => {

    // return (
    //   data.Placa.length <= 2 && data.Placa.length > 0

    // );
  };


  const marcaIsValid = () => {
    // return data.Marca === "Selecione uma Marca";
  };


  const modeloIsValid = () => {
    // return data.Modelo.length <= 2 && data.Modelo.length > 0;
  };


  const anoModeloFabIsValid = () => {
    // return data.AnoModeloFab.length <= 2 && data.AnoModeloFab.length > 0;
  };


  const corIsValid = () => {
    // return data.Cor.length <= 2 && data.Cor.length > 0;
  };


  const estadoDeConservacaoIsValid = () => {
    // return (
    //   // data.EstadoDeConservacao.length <= 2 &&
    //   // data.EstadoDeConservacao.length > 0
    // );
  };


  const isValid = () => {
    let cont = 0;

    // for (const [key, value] of Object.entries(data)) {
    //   if (value == "" || value == 0) {
    //     console.log(`${key}: ${value}`);
    //     cont++;
    //   }
    // }
    // if (cont == 0) {
    //   return true;
    // }
    // Alert.alert(
    //   "Ops...",
    //   "Dados inválidos, Verifique se preencheu todos os campos!"
    // );
    return false;
  };

  return (
    <View style={styles.fields}>
      <Input
        placeholder="Placa *"
        value={plate}
        // error={placaIsValid()}
        errorMessage={"Erro: Preencha a Placa"}
        onChangeText={(value) => {
          const placaFormated = value;
          // setPlaca(placaFormated);
          setPlate(value)
          dispatch(actions.addPlate(value));

        }}
        maxLength={7}
      />

      <Select
        onValueChange={(selectedValue, index) => {
          setBrand(index);
          dispatch(actions.addBrand(index));

        }}
        options={marcaOptions}
        value={brand}
        // error={marcaIsValid()}
        errorMessage={"Erro: Selecione uma Marca"}
        testID="select-brand"
      />

      <Select
        onValueChange={(selectedValue, index) => {
          setModel(index)
          dispatch(actions.addModel(index));

        }}
        options={modeloOptions}
        value={model}
        // error={corIsValid()}
        errorMessage={"Erro: Selecione um modelo"}
        testID="select-model"

      />

      <Input
        placeholder="Ano/Modelo/Fab."
        onChangeText={(value) => {
          setYearModelFab(value)
          dispatch(actions.addYearModelFab(value));
        }}
        value={yearModelFab}
        // error={anoModeloFabIsValid()}
        errorMessage={"Erro: preencha o Ano/Modelo/Fab"}
      />

      <Input
        placeholder="Cor"
        onChangeText={(value) => {
          setColor(value)
          dispatch(actions.addColor(value));

        }}
        value={color}
        // error={corIsValid()}
        errorMessage={"Erro: Digite uma Cor"}
      />

      <Text style={styles.inputText}>Estado de Conservação</Text>
      <View style={styles.contentInputRadio}>
        <View style={styles.InputRadio}>
          <RadioButton
            value="Bom"
            status={conservationState === 1 ? "checked" : "unchecked"}
            color={colors.blue_light}
            onPress={() => {
              setConservationState(1)
              dispatch(actions.addConservationState(1));

              //  setEstadoDeConservacao(1);
            }}
          // error={estadoDeConservacaoIsValid()}
          />
          <Text style={styles.InputRadioText}>Bom</Text>
        </View>

        <View style={styles.InputRadio}>
          <RadioButton
            value="Regular"
            status={conservationState === 2 ? "checked" : "unchecked"}
            onPress={() => {
              setConservationState(2)
              dispatch(actions.addConservationState(2));
            }}
          // error={estadoDeConservacaoIsValid()}
          />
          <Text style={styles.InputRadioText}>Regular</Text>
        </View>
        <View style={styles.InputRadio}>
          <RadioButton
            value="Mau"
            status={conservationState === 3 ? "checked" : "unchecked"}
            onPress={() => {
              setConservationState(3)
              dispatch(actions.addConservationState(3));
            }}
          />
          <Text style={styles.InputRadioText}>Mau</Text>
        </View>
      </View>
      <Footer validate={isValid}></Footer>
    </View>
  );
}
