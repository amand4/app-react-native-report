import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Alert, Animated, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { pieces } from "../../../../config/constants";
import styles from "./styles";
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { AntDesign, FontAwesome, Feather } from "@expo/vector-icons";

import { Select } from "../../../Select";
import { Footer } from "../../../Footer";

import type { RootState } from "../../../../store/index";
import colors from "../../../../styles/colors";

import actions from '../../../../actions/todo'



export function StepThreeChoicePiece(): JSX.Element {

  const dispatch = useDispatch();
  const [arrayPieces, setArrayPieces] = useState([]);
  const piecies = useSelector((state: RootState) => {
    return state.reportReducer.LaudoVeicular.Data.Veiculo.Pieces;
  });
  const state = useSelector((state: RootState) => {
    return state.reportReducer;
  });


  useEffect(() => {

    setArrayPieces(piecies)
  }, [piecies]);

  const handleRemove = (typeNumber: string) => {
    Alert.alert('Remover', `Deseja remover o ${typeNumber}?`, [
      {
        text: 'Não 🙏',
        style: 'cancel',
      },
      {
        text: 'Sim 😥',
        onPress: async () => {
          try {
            dispatch(actions.removePiece(typeNumber))

          } catch (error) {
            Alert.alert('Não foi possível remover!');
          }
        },
      },
    ]);
  }

  const setPiece = (value: any) => {

    dispatch(actions.addTypePiece(value))

  };

  const isValid = () => {
    // if (data.peca == "" && pieces.length != 0) {
    //   return true;
    // }
    // if (data.peca == "") {
    //   Alert.alert("Ops...", "Campo inválido, Selecione um tipo de peça");
    //   return false;
    // }

    return true;
  };

  const RenderPieces = () => {
    return (
      <>
        {arrayPieces.map((item: any, index: number) => (

          <Swipeable key={index}
            overshootRight={false}
            renderRightActions={() => (
              <Animated.View>
                <View>
                  <RectButton style={styles.buttonRemove} onPress={() => handleRemove(item["Type"])
                  }>
                    <Feather name="trash" size={20} color={colors.white}></Feather>
                  </RectButton>
                </View>
              </Animated.View>
            )
            }
          >
            <RectButton style={styles.containerItem} >
              <Text style={styles.buttonText}>{item["Type"]}</Text>
              <AntDesign name="checkcircle" style={styles.icone} />

            </RectButton>
          </Swipeable >
        ))
        }
      </>
    );
  };

  return (
    <View style={styles.fields}>
      <Select
        onValueChange={(selectedValue, itemIndex) => {

          setPiece(selectedValue);
        }}
        options={pieces}
        value={state.tipoDePeca.peca}
        errorMessage={"Erro: Selecione o Tipo de Peça"}
        testID="selec-piece"
      />

      <RenderPieces />



      <Footer validate={isValid}></Footer>
    </View>
  );
}

