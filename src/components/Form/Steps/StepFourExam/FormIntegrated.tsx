import React, { useState } from "react";
import { Text, TouchableOpacity, View, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

import { InputNumber } from "../../../Inputs/InputNumber";
import { NextArrowButton } from "../../../../components/Buttons/NextArrowButton";
import { BackArrowButton } from "../../../../components/Buttons/BackArrowButton";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/";

import actions from "../../../../actions/todo";

import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import * as FileSystem from "expo-file-system";

interface ImageData {
  uri: string;
  base64?: string | undefined;
}

let numerosDoChassi: any = {};

export function FormIntegrated() {
  const dispatch = useDispatch();

  const [numeroDoChassi] = useState(numerosDoChassi);
  const [images, setImage] = useState<ImageData[]>([]);
  const [isValid, setValid] = useState(true);

  const handleSave = async (objImage: ImageData) => {
    const timestamp = new Date().getTime();

    if (objImage.base64) {
      const fileUri = FileSystem.documentDirectory + `photo${timestamp}`;
      const options = { encoding: FileSystem.EncodingType.UTF8 };
      await FileSystem.writeAsStringAsync(fileUri, objImage.base64);
      objImage.base64 = `photo${timestamp}`;
      setImage((oldState) => [...oldState, objImage]);
      data.Data.Integro.Chassi.Imagens[0] =
        objImage.base64 = `photo${timestamp}`;
      setData(data);
    }
  };

  const nextStep = () => {
    if (numeroDoChassi !== {} && images.length > 0) {
      dispatch(actions.addPiece(data));
      numerosDoChassi = {};
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
    Alert.alert(
      "Hey!",
      "Tem certeza que deseja voltar? Os campos não serão salvos.",
      [
        {
          text: "Cancelar",
          onPress: () => null,
          style: "cancel",
        },
        { text: "Sim", onPress: () => setCurrentStep(3) },
      ]
    );
  };

  const setCurrentStep = (value: number) => {
    dispatch(actions.updateCurrentStep(value));
  };

  const tipoDePeca = useSelector(
    (state: RootState) => state.reportReducer.tipoDePeca
  );

  const [data, setData] = useState({
    Type: tipoDePeca.peca,
    Data: {
      Integro: {
        Chassi: {
          Numero: "",
          Imagens: [] as any,
        },
      },
    },
  });

  const setNumeracaoIdentificadora = () => {
    let str = "";
    for (const numero in numeroDoChassi) {
      if (numeroDoChassi.hasOwnProperty(numero)) {
        str += numeroDoChassi[numero];
      }
    }
    data.Data.Integro.Chassi.Numero = str;
  };

  const setPrimeiroNumero = (value: string) => {
    numeroDoChassi["n1"] = value;

    setNumeracaoIdentificadora();
  };
  const setSegundoNumero = (value: string) => {
    numeroDoChassi["n2"] = value;
    setNumeracaoIdentificadora();
  };
  const setTerceiroNumero = (value: string) => {
    numeroDoChassi["n3"] = value;
    setNumeracaoIdentificadora();
  };
  const setQuartoNumero = (value: string) => {
    numeroDoChassi["n4"] = value;
    setNumeracaoIdentificadora();
  };
  const setQuintoNumero = (value: string) => {
    numeroDoChassi["n5"] = value;
    setNumeracaoIdentificadora();
  };
  const setSextoNumero = (value: string) => {
    numeroDoChassi["n6"] = value;
    setNumeracaoIdentificadora();
  };
  const setSetimoNumero = (value: string) => {
    numeroDoChassi["n7"] = value;
    setNumeracaoIdentificadora();
  };
  const setOitavoNumero = (value: string) => {
    numeroDoChassi["n8"] = value;
    setNumeracaoIdentificadora();
  };
  const setNonoNumero = (value: string) => {
    numeroDoChassi["n9"] = value;
    setNumeracaoIdentificadora();
  };
  const setDecimoNumero = (value: string) => {
    numeroDoChassi["n10"] = value;
    setNumeracaoIdentificadora();
  };
  const setDecPrimeiroNumero = (value: string) => {
    numeroDoChassi["n11"] = value;
    setNumeracaoIdentificadora();
  };
  const setDecSegundoNumero = (value: string) => {
    numeroDoChassi["n12"] = value;
    setNumeracaoIdentificadora();
  };
  const setDecTerceiroNumero = (value: string) => {
    numeroDoChassi["n13"] = value;
    setNumeracaoIdentificadora();
  };
  const setDecQuartoNumero = (value: string) => {
    numeroDoChassi["n14"] = value;
    setNumeracaoIdentificadora();
  };
  const setDecQuintoNumero = (value: string) => {
    numeroDoChassi["n15"] = value;
    setNumeracaoIdentificadora();
  };
  const setDecSextoNumero = (value: string) => {
    numeroDoChassi["n16"] = value;
    setNumeracaoIdentificadora();
  };
  const setDecSetimoNumero = (value: string) => {
    numeroDoChassi["n17"] = value;
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
      allowsEditing: false,
      aspect: [5, 8],
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

    if (dataImage.base64) handleSave(dataImage);
  };

  return (
    <View style={styles.fields}>
      <View style={styles.header}>
        <Text style={styles.header}>
          {" "}
          Peça: <Text></Text>{" "}
        </Text>
      </View>

      <View style={styles.headerFormContent}>
        <Text style={styles.header}>Insira a numeração </Text>
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
          value={numerosDoChassi.n1}
          testID="input-chassi-1"
        />
        <Text style={styles.separador}> - </Text>

        <InputNumber
          maxLength={1}
          onChangeText={(value) => {
            setSegundoNumero(value);
          }}
          value={numerosDoChassi.n2}
          testID="input-chassi-2"
        />
        <Text style={styles.separador}> - </Text>
        <InputNumber
          maxLength={1}
          onChangeText={(value) => {
            setTerceiroNumero(value);
          }}
          value={numerosDoChassi.n3}
          testID="input-chassi-3"
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
          value={numerosDoChassi.n4}
          testID="input-chassi-4"
        />
        <Text style={styles.separador}> - </Text>
        <InputNumber
          maxLength={1}
          onChangeText={(value) => {
            setQuintoNumero(value);
          }}
          value={numerosDoChassi.n5}
          testID="input-chassi-5"
        />
        <Text style={styles.separador}> - </Text>
        <InputNumber
          maxLength={1}
          onChangeText={(value) => {
            setSextoNumero(value);
          }}
          value={numerosDoChassi.n6}
          testID="input-chassi-6"
        />
        <Text style={styles.separador}> - </Text>
        <InputNumber
          maxLength={1}
          onChangeText={(value) => {
            setSetimoNumero(value);
          }}
          value={numerosDoChassi.n7}
          testID="input-chassi-7"
        />
        <Text style={styles.separador}> - </Text>
        <InputNumber
          maxLength={1}
          onChangeText={(value) => {
            setOitavoNumero(value);
          }}
          value={numerosDoChassi.n8}
          testID="input-chassi-8"
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
          value={numerosDoChassi.n9}
          testID="input-chassi-9"
        />
        <Text style={styles.separador}> - </Text>
        <InputNumber
          maxLength={1}
          onChangeText={(value) => {
            setDecimoNumero(value);
          }}
          value={numerosDoChassi.n10}
          testID="input-chassi-10"
        />
        <Text style={styles.separador}> - </Text>
        <InputNumber
          maxLength={1}
          onChangeText={(value) => {
            setDecPrimeiroNumero(value);
          }}
          value={numerosDoChassi.n11}
          testID="input-chassi-11"
        />
        <Text style={styles.separador}> - </Text>
        <InputNumber
          maxLength={1}
          onChangeText={(value) => {
            setDecSegundoNumero(value);
          }}
          value={numerosDoChassi.n12}
          testID="input-chassi-12"
        />
        <Text style={styles.separador}> - </Text>
        <InputNumber
          maxLength={1}
          onChangeText={(value) => {
            setDecTerceiroNumero(value);
          }}
          value={numerosDoChassi.n13}
          testID="input-chassi-12"
        />
      </View>

      <View style={styles.contentForm}>
        <InputNumber
          maxLength={1}
          onChangeText={(value) => {
            setDecQuartoNumero(value);
          }}
          value={numerosDoChassi.n14}
          testID="input-chassi-14"
        />
        <Text style={styles.separador}> - </Text>
        <InputNumber
          maxLength={1}
          onChangeText={(value) => {
            setDecQuintoNumero(value);
          }}
          value={numerosDoChassi.n15}
          testID="input-chassi-15"
        />
        <Text style={styles.separador}> - </Text>
        <InputNumber
          maxLength={1}
          onChangeText={(value) => {
            setDecSextoNumero(value);
          }}
          value={numerosDoChassi.n16}
          testID="input-chassi-16"
        />
        <Text style={styles.separador}> - </Text>
        <InputNumber
          maxLength={1}
          onChangeText={(value) => {
            setDecSetimoNumero(value);
          }}
          value={numerosDoChassi.n17}
          testID="input-chassi-17"
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
          ))}

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
