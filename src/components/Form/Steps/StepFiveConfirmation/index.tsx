import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, Alert, View, Platform } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useAuth } from "../../../../hooks/auth";

import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

import { AntDesign, FontAwesome } from "@expo/vector-icons";

import { InputView } from "../../../Inputs/InputView";
import { ImageCard } from "../../../ImageCard";
import { NextArrowButton } from "../../../../components/Buttons/NextArrowButton";
import { BackArrowButton } from "../../../../components/Buttons/BackArrowButton";

import { RootState } from "../../../../store/";
import actions from "../../../../actions/todo";
import report from "../../../../services/database/storage";

import constants from "../../../../config/constants";
import { formatNewDate } from "../../../../utils";
import styles from "./styles";
import { initial_state } from "../../../../utils/initialState";

interface ImageData {
  uri: string;
  base64?: string;
}
export function StepFiveConfirmation() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { user } = useAuth();

  const todos = useSelector((state: RootState) => state);
  const laudo = { ...todos.reportReducer.LaudoVeicular };
  let piecies = laudo.Data.Veiculo.Pieces;
  const [images, setImage] = useState<ImageData[]>([]);
  const dataKey = `@laudos_user:${user.id}`;

  const state = useSelector((state: RootState) => {
    return state.reportReducer;
  });
  const reportData = state.LaudoVeicular;

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const setCurrentStep = (value: number) => {
    dispatch(actions.updateCurrentStep(value));
  };

  const handleSubmit = async () => {
    if (images.length > 0) {
      try {
        const response = await report.save(dataKey, state, user);

        navigation.navigate("MyReports");
        setCurrentStep(1);
        dispatch(actions.resetState(initial_state));
      } catch (error) {
        Alert.alert("Erro", "Não foi possível cadastrar o laudo");
      }
    } else {
      Alert.alert(
        "Ops, faltou as imagens!",
        "Para enviar adicione pelo menos 1 foto do veículo!",
        [
          {
            text: "Ok",
            onPress: () => null,
            style: "cancel",
          },
        ]
      );
    }
  };

  const previousStep = () => {
    setCurrentStep(3);
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

    const data = {
      id: pickerResult,
      uri: pickerResult.uri,
      base64: pickerResult.base64,
    };

    setImage((oldState) => [...oldState, data]);
    dispatch(actions.addImageGallery(images));
  };

  const RenderPieces = () => {
    return (
      <>
        {piecies.map((item: any, index: number) => (
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            key={index}
          >
            <Text style={styles.buttonText}>{item["Type"]}</Text>
            <Text style={styles.buttonText}>
              <AntDesign name="checkcircle" style={styles.icone} />
            </Text>
          </TouchableOpacity>
        ))}
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headerFormContent}>
          <Text style={styles.header}> Informações Gerais </Text>
        </View>
        <View style={styles.fields}>
          <View style={styles.contentField}>
            <View style={styles.fieldText}>
              <Text style={styles.text}>Rep:</Text>
            </View>
            <View style={styles.field}>
              <InputView
                testID="input-number1"
                placeholder=""
                editable={false}
                selectTextOnFocus={false}
                value={String(reportData.Data.Cabecalho.Rep)}
              />
            </View>
          </View>
          <View style={styles.contentField}>
            <View style={styles.fieldText}>
              <Text style={styles.text}>Ofício:</Text>
            </View>
            <View style={styles.field}>
              <InputView
                testID="input-number1"
                placeholder=""
                editable={false}
                selectTextOnFocus={false}
                value={String(laudo.Data.Cabecalho.NrdoOficio)}
              />
            </View>
          </View>
          <View style={styles.contentField}>
            <View style={styles.fieldText}>
              <Text style={styles.text}>Indiciado:</Text>
            </View>
            <View style={styles.field}>
              <InputView
                testID="input-number1"
                placeholder=""
                editable={false}
                selectTextOnFocus={false}
                value={laudo.Data.Cabecalho.Indiciado}
              />
            </View>
          </View>
          <View style={styles.contentField}>
            <View style={styles.fieldText}>
              <Text style={styles.text}>Tipo Inq:</Text>
            </View>
            <View style={styles.field}>
              <InputView
                testID="input-number1"
                placeholder=""
                editable={false}
                selectTextOnFocus={false}
                value={
                  constants.typeInquerisOptions[
                    laudo.Data.Cabecalho.TipoDeInquerito
                  ].label
                }
              />
            </View>
          </View>
          <View style={styles.contentField}>
            <View style={styles.fieldText}>
              <Text style={styles.text}>Nº Inq:</Text>
            </View>
            <View style={styles.field}>
              <InputView
                testID="input-number1"
                placeholder=""
                editable={false}
                selectTextOnFocus={false}
                value={String(laudo.Data.Cabecalho.NrdoInquerito)}
              />
            </View>
          </View>
          <View style={styles.contentField}>
            <View style={styles.fieldText}>
              <Text style={styles.text}>Seção :</Text>
            </View>
            <View style={styles.field}>
              <InputView
                testID="input-number1"
                placeholder=""
                editable={false}
                selectTextOnFocus={false}
                value={constants.secao[laudo.Data.Cabecalho.Secao].label}
              />
            </View>
          </View>

          <View style={styles.contentField}>
            <View style={styles.fieldText}>
              <Text style={styles.text}>Diretor:</Text>
            </View>
            <View style={styles.field}>
              <InputView
                testID="input-number1"
                placeholder=""
                editable={false}
                selectTextOnFocus={false}
                value={
                  constants.directorsOptions[laudo.Data.Cabecalho.Diretor].label
                }
              />
            </View>
          </View>

          <View style={styles.contentField}>
            <View style={styles.fieldText}>
              <Text style={styles.text}>Cidade:</Text>
            </View>
            <View style={styles.field}>
              <InputView
                testID="input-number1"
                placeholder=""
                editable={false}
                selectTextOnFocus={false}
                value={constants.cities[laudo.Data.Cabecalho.Cidade].label}
              />
            </View>
          </View>

          <View style={styles.contentField}>
            <View style={styles.fieldText}>
              <Text style={styles.text}>Nat. Exame:</Text>
            </View>
            <View style={styles.field}>
              <InputView
                testID="input-number1"
                placeholder=""
                editable={false}
                selectTextOnFocus={false}
                value={
                  constants.naturezaExame[laudo.Data.Cabecalho.NaturezaDoExame]
                    .label
                }
              />
            </View>
          </View>
          <View style={styles.contentField}>
            <View style={styles.fieldText}>
              <Text style={styles.text}>Org. Solic.:</Text>
            </View>
            <View style={styles.field}>
              <InputView
                testID="input-number1"
                placeholder=""
                editable={false}
                selectTextOnFocus={false}
                value={
                  constants.orgaoSolicitanteOptions[
                    laudo.Data.Cabecalho.OrgaoSolicitante
                  ].label
                }
              />
            </View>
          </View>
          <View style={styles.contentField}>
            <View style={styles.fieldText}>
              <Text style={styles.text}>Data Des:</Text>
            </View>
            <View style={styles.field}>
              <InputView
                testID="input-number1"
                placeholder=""
                editable={false}
                selectTextOnFocus={false}
                value={formatNewDate(laudo.Data.Cabecalho.DataDeDesignacao)}
              />
            </View>
          </View>
          <View style={styles.contentField}>
            <View style={styles.fieldText}>
              <Text style={styles.text}>Data Solic:</Text>
            </View>
            <View style={styles.field}>
              <InputView
                testID="input-number1"
                placeholder=""
                editable={false}
                selectTextOnFocus={false}
                value={formatNewDate(laudo.Data.Cabecalho.DataDeSolicitacao)}
              />
            </View>
          </View>
        </View>
        <View style={styles.headerFormContent}>
          <Text style={styles.header}> Dados Básicos do Veículo</Text>
        </View>

        <View style={styles.contentField}>
          <View style={styles.fieldText}>
            <Text style={styles.text}>Placa:</Text>
          </View>
          <View style={styles.field}>
            <InputView
              testID="input-number1"
              placeholder=""
              editable={false}
              selectTextOnFocus={false}
              value={laudo.Data.Veiculo.Data.Placa}
            />
          </View>
        </View>
        <View style={styles.contentField}>
          <View style={styles.fieldText}>
            <Text style={styles.text}>Modelo:</Text>
          </View>
          <View style={styles.field}>
            <InputView
              testID="input-number1"
              placeholder=""
              editable={false}
              selectTextOnFocus={false}
              value={
                constants.modeloOptions[laudo.Data.Veiculo.Data.Modelo].label
              }
            />
          </View>
        </View>
        <View style={styles.contentField}>
          <View style={styles.fieldText}>
            <Text style={styles.text}>Marca:</Text>
          </View>
          <View style={styles.field}>
            <InputView
              testID="input-number1"
              placeholder=""
              editable={false}
              selectTextOnFocus={false}
              value={
                constants.marcaOptions[laudo.Data.Veiculo.Data.Marca].label
              }
            />
          </View>
        </View>
        <View style={styles.contentField}>
          <View style={styles.fieldText}>
            <Text style={styles.text}>AnoModeloFab:</Text>
          </View>
          <View style={styles.field}>
            <InputView
              testID="input-number1"
              placeholder=""
              editable={false}
              selectTextOnFocus={false}
              value={laudo.Data.Veiculo.Data.AnoModeloFab}
            />
          </View>
        </View>

        <View style={styles.contentField}>
          <View style={styles.fieldText}>
            <Text style={styles.text}>Cor:</Text>
          </View>
          <View style={styles.field}>
            <InputView
              testID="input-number1"
              placeholder=""
              editable={false}
              selectTextOnFocus={false}
              value={laudo.Data.Veiculo.Data.Cor}
            />
          </View>
        </View>
        <View style={styles.field}>
          <View>
            <Text style={styles.text}>
              Estado de conservação:{" "}
              <Text style={styles.text}>
                {
                  constants.stateConservation[
                    laudo.Data.Veiculo.Data.EstadoDeConservacao
                  ].label
                }
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.headerFormContent}>
          <Text style={styles.header}> Tipo de Veículo</Text>
        </View>
        <View style={styles.field}>
          <View>
            <Text style={styles.text}> Veículo: </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.buttonVehicle} activeOpacity={1}>
          <Text style={styles.buttonText}>{laudo.Data.Veiculo.Type}</Text>
        </TouchableOpacity>

        <View style={styles.headerFormContent}>
          <Text style={styles.header}> Peças </Text>
        </View>
        <RenderPieces />
      </View>
      <View style={styles.headerFormContent}>
        <Text style={styles.header}> Galeria </Text>
      </View>
      <View>
        <Text style={styles.warning}>
          {" "}
          obs: a primeira imagem deve ser do veiculo!
        </Text>
      </View>
      <View style={styles.containerGalery}>
        {images &&
          images.map((localUri, index) => (
            <ImageCard
              testID="input-image"
              index={index}
              key={index}
              uri={localUri.uri}
            ></ImageCard>
          ))}
      </View>
      <View style={styles.contentButton}>
        <TouchableOpacity
          onPress={openImagePickerAsync}
          style={styles.buttonAdd}
        >
          <Text style={styles.buttonAddText}>Adicionar Foto</Text>
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
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
}
