import React, { useState, } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  Switch,
  Button, Alert
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import { RadioButton } from "react-native-paper";

import { InputNumber } from "../../../Inputs/InputNumber";
import { NextArrowButton } from "../../../Buttons/NextArrowButton";
import { Select } from "../../../Select/";
import { SelectString } from "../../../Select/SelectString";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/";

import actions from '../../../../actions/todo'


import styles from "./styles";
import colors from "../../../../styles/colors";
import { FontAwesome } from "@expo/vector-icons";

import { typeAdulterated, typeNumbers } from "../../../../config/constants";
import constants from "../../../../config/constants";



interface ImageData {
  uri: string;
  base64?: string | undefined;
}

export function FormAdultered() {
  const [numeracaoDoChassi, setNumeracaoChassi] = useState({} as any);
  const [newNumber, setNewNumber] = useState("");
  const [tipoNumeracao, setTipoNumeracao] = useState(1);
  const [metodo, setMedodo] = useState(1);
  const [destruicao, setDestruicao] = useState(false);
  const [images, setImage] = useState<ImageData[]>([]);
  const dispatch = useDispatch();

  const tipoDePeca = useSelector(
    (state: RootState) => state.reportReducer.tipoDePeca
  );
  const [data, setData] = useState({
    Type: tipoDePeca.peca == "1" ? "Chassi" : "Motor",
    Data: {
      Adulterado: {
        Type: constants.typeAdulterated[metodo].label,
        Data: {
          DestruicaoTotal: destruicao,
          MetodoDeDestruicao: metodo,
          NumeracaoIdentificadora: [] as any,
        },
      },
    },
  });

  const handleAddNewNumber = () => {
    const dataNumber = {
      Type: constants.typeNumbers[tipoNumeracao].label,
      Data: {
        Numero: newNumber,
        Imagens: images,
      },
    };

    data.Data.Adulterado.Data.NumeracaoIdentificadora.push(dataNumber);
    setData(data);
    setNumeracaoChassi({});
  }

  const addPeca = () => {
    // if (isValid()) {
    // setNumeracoes();
    dispatch(actions.addPiece(data));
    // numerosDoChassi = {};
    dispatch(actions.updateCurrentStep(3));
    // }
  };

  const createTwoButtonAlert = (index: number) =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK", onPress: () => {

          }
        }
      ],
      { cancelable: false }
    );

  const rv = (numero: number) => {
    const filterd = data.Data.Adulterado.Data.NumeracaoIdentificadora.filter((obj: any) => obj["Data"].Numero != numero)
    let tt = {
      ...data,
      Type: data.Type as any,
      Data: {
        ...data.Data,
        Adulterado: {
          ...data.Data.Adulterado,
          Type: data.Data.Adulterado.Type,
          Data: {
            ...data.Data.Adulterado.Data,
            DestruicaoTotal: data.Data.Adulterado.Data.DestruicaoTotal,
            MetodoDeDestruicao: data.Data.Adulterado.Data.MetodoDeDestruicao,
            NumeracaoIdentificadora: filterd

          }
        }

      },

    }

    setData(tt);



  }

  const setMetodoDestruicao = (value: number) => {
    data.Data.Adulterado.Data.MetodoDeDestruicao = value;
    setData(data);

  };

  const setDestruicaoTotal = (value: boolean) => {
    data.Data.Adulterado.Data.DestruicaoTotal = value;
    setData(data);


  };

  const setNumeracaoIdentificadora = () => {
    let str = "";
    for (const numero in numeracaoDoChassi) {
      if (numeracaoDoChassi.hasOwnProperty(numero)) {
        str += numeracaoDoChassi[numero];
      }
    }
    setNewNumber(str);
  };


  const setPrimeiroNumero = (value: string) => {
    numeracaoDoChassi["n1"] = value;

    setNumeracaoIdentificadora();
  };
  const setSegundoNumero = (value: string) => {
    numeracaoDoChassi["n2"] = value;
    setNumeracaoIdentificadora();
  };
  const setTerceiroNumero = (value: string) => {
    numeracaoDoChassi["n3"] = value;
    setNumeracaoIdentificadora();
  };
  const setQuartoNumero = (value: string) => {
    numeracaoDoChassi["n4"] = value;
    setNumeracaoIdentificadora();
  };
  const setQuintoNumero = (value: string) => {
    numeracaoDoChassi["n5"] = value;
    setNumeracaoIdentificadora();
  };
  const setSextoNumero = (value: string) => {
    numeracaoDoChassi["n6"] = value;
    setNumeracaoIdentificadora();
  };
  const setSetimoNumero = (value: string) => {
    numeracaoDoChassi["n7"] = value;
    setNumeracaoIdentificadora();
  };
  const setOitavoNumero = (value: string) => {
    numeracaoDoChassi["n8"] = value;
    setNumeracaoIdentificadora();
  };
  const setNonoNumero = (value: string) => {
    numeracaoDoChassi["n9"] = value;
    setNumeracaoIdentificadora();
  };
  const setDecimoNumero = (value: string) => {
    numeracaoDoChassi["n10"] = value;
    setNumeracaoIdentificadora();
  };
  const setDecPrimeiroNumero = (value: string) => {
    numeracaoDoChassi["n11"] = value;
    setNumeracaoIdentificadora();
  };
  const setDecSegundoNumero = (value: string) => {
    numeracaoDoChassi["n12"] = value;
    setNumeracaoIdentificadora();
  };
  const setDecTerceiroNumero = (value: string) => {
    numeracaoDoChassi["n13"] = value;
    setNumeracaoIdentificadora();
  };
  const setDecQuartoNumero = (value: string) => {
    numeracaoDoChassi["n14"] = value;
    setNumeracaoIdentificadora();
  };
  const setDecQuintoNumero = (value: string) => {
    numeracaoDoChassi["n15"] = value;
    setNumeracaoIdentificadora();
  };
  const setDecSextoNumero = (value: string) => {
    numeracaoDoChassi["n16"] = value;
    setNumeracaoIdentificadora();
  };
  const setDecSetimoNumero = (value: string) => {
    numeracaoDoChassi["n17"] = value;
    setNumeracaoIdentificadora();
  };

  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
      base64: true,
    });
    if (pickerResult.cancelled === true) {
      return;
    }
    const dataImage: ImageData = {
      uri: pickerResult.uri,
      base64: pickerResult.base64,
    };

    // data.Data.Integro.Chassi.Imagens.push(pickerResult.base64);

    setImage((oldState) => [...oldState, dataImage]);

  };

  return (
    <View style={styles.fields}>
      <View style={styles.header}>
        <Text style={styles.header}>
          {" "}
          Peça - total: {
            data.Data.Adulterado.Data.NumeracaoIdentificadora.length
          } <Text></Text>{" "}
        </Text>
      </View>

      <Select
        onValueChange={(selectedValue, itemIndex) => {
          setMetodoDestruicao(itemIndex);
          setMedodo(itemIndex)

        }}
        options={typeAdulterated}
        value={metodo}
        // error={tipoDeInqueritoIsValid()}
        errorMessage={"Erro: Selecione um método de destruição"}
        testID="selec-methodo"

      />
      <View style={styles.contentInputRadio}>
        <View style={styles.InputRadio}>
          <RadioButton
            value="Total"
            status={
              destruicao === true
                ? "checked"
                : "unchecked"
            }
            color={colors.blue_light}
            onPress={() => {
              setDestruicaoTotal(true);
              setDestruicao(true)

            }}
          />
          <Text style={styles.InputRadioText}>Total</Text>
        </View>
        <View style={styles.InputRadio}>
          <RadioButton
            value="Parcial"
            status={
              destruicao == false
                ? "checked"
                : "unchecked"
            }
            onPress={() => {
              setDestruicaoTotal(false);
              setDestruicao(false)

            }}
          />
          <Text style={styles.InputRadioText}>Parcial</Text>
        </View>
      </View>
      {/* <View>
        <Text style={styles.InputRadioText}>
          Numeração original não revelada
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setRevealed}
          value={isEnabled}
        />
      </View> */}
      <View style={styles.headerFormContent}>
        <Text style={styles.header}>Escolha um tipo de numeração </Text>
      </View>
      <Select
        onValueChange={(selectedValue, index) => {
          setTipoNumeracao(index);
        }}
        options={typeNumbers}
        value={tipoNumeracao}
        // error={tipoDeInqueritoIsValid()}
        errorMessage={"Erro: Selecione o Tipo de numeração"}
        testID="selec-typeNumber"

      />
      <View style={styles.headerFormContent}>
        <Text style={styles.header}>Insira a numeração adulterada </Text>
      </View>
      <View style={styles.headerFormContent}>
        <Text style={styles.headerFormText}>WMI</Text>
      </View>

      <View style={styles.contentForm}>
        <InputNumber
          maxLength={1}
          onChangeText={(value) => {
            setPrimeiroNumero(value);
          }}
          value={numeracaoDoChassi.n1}
          testID="input-number1"

        />
        <Text style={styles.separador}> - </Text>

        <InputNumber
          maxLength={1}
          onChangeText={(value) => {
            setSegundoNumero(value);
          }}
          value={numeracaoDoChassi.n2}
          testID="input-number1"

        />
        <Text style={styles.separador}> - </Text>
        <InputNumber
          maxLength={1}
          onChangeText={(value) => {
            setTerceiroNumero(value);
          }}
          value={numeracaoDoChassi.n3}
          testID="input-number1"

        />
      </View>
      <View style={styles.headerFormContent}>
        <Text style={styles.headerFormText}>VIS</Text>
      </View>

      <View style={styles.contentForm}>
        <InputNumber
          maxLength={1}
          onChangeText={(value) => {
            setQuartoNumero(value);
          }}
          value={numeracaoDoChassi.n4}
          testID="input-number1"

        />
        <Text style={styles.separador}> - </Text>
        <InputNumber
          maxLength={1}
          onChangeText={(value) => {
            setQuintoNumero(value);
          }}
          value={numeracaoDoChassi.n5}
          testID="input-number1"

        />
        <Text style={styles.separador}> - </Text>
        <InputNumber
          maxLength={1}
          onChangeText={(value) => {
            setSextoNumero(value);
          }}
          value={numeracaoDoChassi.n6}
          testID="input-number1"

        />
        <Text style={styles.separador}> - </Text>
        <InputNumber
          maxLength={1}
          onChangeText={(value) => {
            setSetimoNumero(value);
          }}
          value={numeracaoDoChassi.n7}
          testID="input-number1"

        />
        <Text style={styles.separador}> - </Text>
        <InputNumber
          maxLength={1}
          onChangeText={(value) => {
            setOitavoNumero(value);
          }}
          value={numeracaoDoChassi.n8}
          testID="input-number1"

        />
      </View>
      <View style={styles.headerFormContent}>
        <Text style={styles.headerFormText}>VDS</Text>
      </View>

      <View style={styles.contentForm}>
        <InputNumber
          maxLength={1}
          onChangeText={(value) => {
            setNonoNumero(value);
          }}
          value={numeracaoDoChassi.n9}
          testID="input-number1"

        />
        <Text style={styles.separador}> - </Text>
        <InputNumber
          maxLength={1}
          onChangeText={(value) => {
            setDecimoNumero(value);
          }}
          value={numeracaoDoChassi.n10}
          testID="input-number1"

        />
        <Text style={styles.separador}> - </Text>
        <InputNumber
          maxLength={1}
          onChangeText={(value) => {
            setDecPrimeiroNumero(value);
          }}
          value={numeracaoDoChassi.n11}
          testID="input-number1"

        />
        <Text style={styles.separador}> - </Text>
        <InputNumber
          maxLength={1}
          onChangeText={(value) => {
            setDecSegundoNumero(value);
          }}
          value={numeracaoDoChassi.n12}
          testID="input-number1"

        />
        <Text style={styles.separador}> - </Text>
        <InputNumber
          maxLength={1}
          onChangeText={(value) => {
            setDecTerceiroNumero(value);
          }}
          value={numeracaoDoChassi.n13}
          testID="input-number1"

        />
      </View>

      <View style={styles.contentForm}>
        <InputNumber
          maxLength={1}
          onChangeText={(value) => {
            setDecQuartoNumero(value);
          }}
          value={numeracaoDoChassi.n14}
          testID="input-number1"

        />
        <Text style={styles.separador}> - </Text>
        <InputNumber
          maxLength={1}
          onChangeText={(value) => {
            setDecQuintoNumero(value);
          }}
          value={numeracaoDoChassi.n15}
          testID="input-number1"

        />
        <Text style={styles.separador}> - </Text>
        <InputNumber
          maxLength={1}
          onChangeText={(value) => {
            setDecSextoNumero(value);
          }}
          value={numeracaoDoChassi.n16}
          testID="input-number1"

        />
        <Text style={styles.separador}> - </Text>
        <InputNumber
          maxLength={1}
          onChangeText={(value) => {
            setDecSetimoNumero(value);
          }}
          value={numeracaoDoChassi.n17}
          testID="input-number1"

        />
      </View>

      <View style={styles.container}>
        {images &&
          images.map((localUri, index) => (
            <Image
              key={index}
              source={{ uri: localUri.uri }}
              style={styles.thumbnail}
            />
            // <View style={styles.containerGalery}>
            //   <ImageCard key={index} uri={localUri.uri}></ImageCard>
            // </View>
          ))}
        <Button title="Adicionar numeração" onPress={handleAddNewNumber} />
        {/* <RenderPieces /> */}
        <>
          {data.Data.Adulterado.Data.NumeracaoIdentificadora.map((item: any, index: number) => (
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.7}
              key={index}
              onPress={() => rv(item["Data"].Numero)}
            >
              <Text style={styles.buttonText}>{item["Type"]}</Text>
              <Text style={styles.buttonText}>{item["Data"].Numero}</Text>


            </TouchableOpacity>
          ))}
        </>

        <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
          <Text style={styles.buttonText}>Adicionar Foto</Text>
          <FontAwesome
            name="camera"
            style={styles.icone}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <NextArrowButton
        title="Confirmar"
        icone="arrow-right"
        onPress={addPeca}
      ></NextArrowButton>
    </View>
  );
}
