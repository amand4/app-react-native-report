import React, { useState, useEffect } from "react";
import { Text, View, Alert, Animated, Easing } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import styles from "./styles";
import Swipeable from "react-native-gesture-handler/Swipeable";

import { RectButton } from "react-native-gesture-handler";

import { AntDesign, Feather } from "@expo/vector-icons";

import { Select } from "../../../Select";
import { NextArrowButton } from "../../../../components/Buttons/NextArrowButton";
import { BackArrowButton } from "../../../../components/Buttons/BackArrowButton";
import { FinalArrowButton } from "../../../../components/Buttons/FinalArrowButton";

import type { RootState } from "../../../../store/index";
import colors from "../../../../styles/colors";
import { pieces } from "../../../../config/constants";
import actions from "../../../../actions/todo";
import { selectIsValid } from "../../../../utils/validate";
import ExpandMore from "./ExpandMore";

export function StepThreeChoicePiece(): JSX.Element {
  const dispatch = useDispatch();
  const [arrayPieces, setArrayPieces] = useState<string[]>([]);
  const [piece, setPiece] = useState(0);
  const [isValid, setValid] = useState(true);
  const [validatePiece, setValidatePiece] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const piecies = useSelector((state: RootState) => {
    return state.reportReducer.LaudoVeicular.Data.Veiculo.Pieces;
  });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const setCurrentStep = (value: number) => {
    dispatch(actions.updateCurrentStep(value));
  };

  const nextStep = () => {
    if (arrayPieces.length > 0) {
      arrayPieces.map((item: any) => {
        if (item.Type == pieces[piece].label) {
          Alert.alert(
            "Ops!!",
            "Peça já cadastrada! Escolha outra para realizar o exame.",
            [{ text: "OK" }]
          );
          return false;
        }
        setCurrentStep(4);
        return true;
      });
    } else if (pieces[piece].label == "Selecione uma Peça") {
      Alert.alert("Ops, informações inválidas!", "Selecione uma peça!", [
        { text: "OK" },
      ]);
    } else {
      setCurrentStep(4);
    }
  };

  const previousStep = () => {
    setCurrentStep(2);
  };

  const lastStep = () => {
    if (arrayPieces.length >= 2 || (piece !== 0 && isValid)) {
      dispatch(actions.addTypePiece(pieces[piece].label));
      setCurrentStep(5);
    } else {
      Alert.alert("Ops, informações inválidas!", "Selecione uma peça!", [
        { text: "OK" },
      ]);
    }
  };

  useEffect(() => {
    setArrayPieces(piecies);
  }, [piecies]);

  const handleRemove = (typeNumber: string) => {
    Alert.alert("Remover", `Deseja remover o ${typeNumber}?`, [
      {
        text: "Não 🙏",
        style: "cancel",
      },
      {
        text: "Sim 😥",
        onPress: async () => {
          try {
            dispatch(actions.removePiece(typeNumber));
            arrayPieces.filter((obj: any) => obj["Type"] != typeNumber);
          } catch (error) {
            Alert.alert("Não foi possível remover!");
          }
        },
      },
    ]);
  };

  const RenderPieces = () => {
    return (
      <>
        {arrayPieces.map((item: any, index: number) => (
          <View key={index}>
            <Swipeable
              key={index}
              overshootRight={false}
              renderRightActions={() => (
                <Animated.View>
                  <View>
                    <RectButton
                      style={styles.buttonRemove}
                      onPress={() => handleRemove(item["Type"])}
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
              <RectButton
                style={styles.containerItem}
                onPress={() => handleExpandClick()}
              >
                <Text style={styles.buttonText}>{item["Type"]}</Text>
                <AntDesign name="checkcircle" style={styles.icone} />
              </RectButton>
              <ExpandMore item={item} expand={expanded}></ExpandMore>
            </Swipeable>
          </View>
        ))}
      </>
    );
  };

  return (
    <View style={styles.fields}>
      <Select
        onValueChange={(selectedValue, index) => {
          setPiece(index);

          dispatch(actions.addTypePiece(pieces[index].label));
          setValidatePiece(selectIsValid(index));
        }}
        options={pieces}
        value={piece}
        errorMessage={"Erro: Selecione o Tipo de Peça"}
        testID="selec-piece"
        error={validatePiece}
      />

      <RenderPieces />

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
      <FinalArrowButton
        title="Concluir"
        icone="arrow-right"
        onPress={lastStep}
      />
    </View>
  );
}
