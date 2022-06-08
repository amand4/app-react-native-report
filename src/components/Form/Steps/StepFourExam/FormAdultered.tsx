import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
  Animated,
  Easing,
  Alert,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";

import * as ImagePicker from "expo-image-picker";
import { RadioButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { AntDesign, Feather } from "@expo/vector-icons";

import { InputNumber } from "../../../Inputs/InputNumber";
import { NextArrowButton } from "../../../Buttons/NextArrowButton";
import { BackArrowButton } from "../../../../components/Buttons/BackArrowButton";

import { Select } from "../../../Select/";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/";

import actions from "../../../../actions/todo";

import styles from "./styles";
import colors from "../../../../styles/colors";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

import {
  optionsTypeTampering,
  optionsTypeTamperingPiece,
  optionsMethodTampering,
} from "../../../../config/constants";
import constants from "../../../../config/constants";
import { selectIsValid } from "../../../../utils/validate";
import ExpandMore from "./ExpandMore";
import * as FileSystem from "expo-file-system";

interface ImageData {
  uri: string;
  base64?: string | undefined;
}

export function FormAdultered() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [numeracaoDoChassi, setNumeracaoChassi] = useState({} as any);
  const [newNumber, setNewNumber] = useState("");
  const [typeTamperginPiece, setTypeTamperingPiece] = useState(1);
  const [typeTampering, setTypeTampering] = useState(1);

  const [methodTampering, setMethodTampering] = useState(1);
  const [destruicao, setDestruicao] = useState(false);
  const [images, setImage] = useState<ImageData[]>([]);
  const [validateMethodAdultered, setValidateMethodAdultered] = useState(false);
  const [validateTypeNumber, setValidateTypeNumber] = useState(false);
  const [validateTypeTampering, setValidateTypeTampering] = useState(false);

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const tipoDePeca = useSelector(
    (state: RootState) => state.reportReducer.tipoDePeca
  );
  const [data, setData] = useState({
    Type: tipoDePeca.peca,
    Data: {
      Adulterado: {
        Type: optionsTypeTampering[typeTampering].value,
        Data: {
          DestruicaoTotal: destruicao,
          MetodoDeDestruicao: methodTampering,
          NumeracaoIdentificadora: [] as any,
        },
      },
    },
  });

  const handleSave = async (objImage: ImageData) => {
    const timestamp = new Date().getTime();

    if (objImage.base64) {
      const fileUri = FileSystem.documentDirectory + `photo${timestamp}`;
      const options = { encoding: FileSystem.EncodingType.UTF8 };
      await FileSystem.writeAsStringAsync(fileUri, objImage.base64);

      objImage.base64 = `photo${timestamp}`;
      setImage((oldState) => [...oldState, objImage]);
    }
  };

  const handleAddNewNumber = () => {
    if (Object.keys(numeracaoDoChassi).length === 0) {
      Alert.alert(
        "Ops, informações inválidas!",
        "Por favor, adicione uma numeração",
        [{ text: "OK" }]
      );
    }

    if (images.length == 0) {
      Alert.alert(
        "Ops, informações inválidas!",
        "Por favor, adicione uma imagem!",
        [{ text: "OK" }]
      );
    }
    if (numeracaoDoChassi !== {} && images.length > 0) {
      const dataNumber = {
        Type: optionsTypeTamperingPiece[typeTamperginPiece].value,
        Data: {
          Numero: newNumber,
          Imagens: images,
        },
      };
      const allNumering = data.Data.Adulterado.Data.NumeracaoIdentificadora;
      let isValid = true;
      allNumering.map((item: any) => {
        if (item.Type == optionsTypeTamperingPiece[typeTamperginPiece].value) {
          Alert.alert(
            "Ops!!",
            "Tipo já cadastrado! Por valor, selecione outro tipo de numeração!",
            [{ text: "OK" }]
          );
          isValid = false;
        }
      });
      if (isValid) {
        allNumering.push(dataNumber);
        setData(data);
        setNumeracaoChassi({});
        setImage([]);
      }
    }
  };

  const setCurrentStep = (value: number) => {
    dispatch(actions.updateCurrentStep(value));
  };

  const nextStep = () => {
    if (data.Data.Adulterado.Data.NumeracaoIdentificadora.length > 0) {
      dispatch(actions.addPiece(data));
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

  const removeNumberChassi = (numero: number) => {
    const filterd = data.Data.Adulterado.Data.NumeracaoIdentificadora.filter(
      (obj: any) => obj["Data"].Numero != numero
    );
    const newChassiFiltered = {
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
            NumeracaoIdentificadora: filterd,
          },
        },
      },
    };

    setData(newChassiFiltered);
  };

  const RenderPieces = () => {
    return (
      <View style={styles.containerNumbers}>
        {data.Data.Adulterado.Data.NumeracaoIdentificadora.map(
          (item: any, index: number) => (
            <View key={index}>
              <Swipeable
                key={index}
                overshootRight={false}
                renderRightActions={() => (
                  <Animated.View>
                    <View>
                      <RectButton
                        style={styles.buttonRemove}
                        onPress={() => removeNumberChassi(item["Data"].Numero)}
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
                  <Text style={styles.buttonText}>
                    {index + 1} - {item["Type"]}
                  </Text>

                  <AntDesign name="checkcircle" style={styles.icone} />
                </RectButton>
                {item && (
                  <ExpandMore
                    item={item}
                    index={index}
                    expand={expanded}
                  ></ExpandMore>
                )}
              </Swipeable>
            </View>
          )
        )}
      </View>
    );
  };

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

    if (dataImage.base64) handleSave(dataImage);
  };

  return (
    <View style={styles.fields}>
      <Select
        onValueChange={(selectedValue, index) => {
          setTypeTampering(index);
          setValidateTypeTampering(selectIsValid(index));
        }}
        options={optionsTypeTampering}
        value={typeTampering}
        error={validateTypeTampering}
        errorMessage={"Erro: Selecione o tipo de adulteração"}
        testID="selec-methodo"
      />

      <Select
        onValueChange={(selectedValue, index) => {
          setMethodTampering(index);
          setValidateMethodAdultered(selectIsValid(index));
        }}
        options={optionsMethodTampering}
        value={methodTampering}
        error={validateMethodAdultered}
        errorMessage={"Erro: Selecione um método de destruição"}
        testID="selec-methodo"
      />
      <View style={styles.contentInputRadio}>
        <View style={styles.InputRadio}>
          <RadioButton
            value="Total"
            status={destruicao === true ? "checked" : "unchecked"}
            color={colors.blue_light}
            onPress={() => {
              setDestruicaoTotal(true);
              setDestruicao(true);
            }}
          />
          <Text style={styles.InputRadioText}>Total</Text>
        </View>
        <View style={styles.InputRadio}>
          <RadioButton
            value="Parcial"
            status={destruicao == false ? "checked" : "unchecked"}
            onPress={() => {
              setDestruicaoTotal(false);
              setDestruicao(false);
            }}
          />
          <Text style={styles.InputRadioText}>Parcial</Text>
        </View>
      </View>

      <View style={styles.headerFormContent}>
        <Text style={styles.header}>Escolha um tipo de numeração </Text>
      </View>
      <Select
        onValueChange={(selectedValue, index) => {
          setTypeTamperingPiece(index);
          //  setValidateTypeNumber(selectIsValid(index));
        }}
        options={optionsTypeTamperingPiece}
        value={typeTamperginPiece}
        error={validateTypeNumber}
        errorMessage={"Erro: Selecione o Tipo de numeração da Peça"}
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
      <View style={styles.headerFormContent}>
        <Text style={styles.header}>Insira uma imagem da peça </Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
          <Text style={styles.buttonText}>Adicionar Foto</Text>
          <FontAwesome
            name="camera"
            style={styles.icone}
            size={24}
            color="black"
          />
        </TouchableOpacity>

        {images &&
          images.map((localUri, index) => (
            <Image
              key={index}
              source={{ uri: localUri.uri }}
              style={styles.thumbnail}
            />
          ))}
        <TouchableOpacity
          onPress={handleAddNewNumber}
          style={styles.buttonNumbers}
        >
          <Text style={styles.buttonText}>Adicionar Numeração</Text>

          <MaterialIcons
            name="add-circle"
            size={24}
            color={colors.blue_light}
            style={styles.icone}
          />
        </TouchableOpacity>
        <View style={styles.headerFormContent}>
          <Text style={styles.header}> Lista de numerações identificadas </Text>
        </View>

        {images && <RenderPieces />}
      </View>
      <View style={styles.header}>
        <Text style={styles.header}>
          {" "}
          Peça - total:{" "}
          {data.Data.Adulterado.Data.NumeracaoIdentificadora.length}{" "}
          <Text></Text>{" "}
        </Text>
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
          isValid={true}
        />
      </View>
    </View>
  );
}
