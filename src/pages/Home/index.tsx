import React, { useState, useEffect } from "react";
import { Button, Alert, Modal, StyleSheet, Text, Pressable, ScrollView, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
import styles from "./styles";
import { typeVehicles } from "../../config/constants";
import { VehicleCardPrimary } from "../../components/VehicleCard";
import { Header } from "../../components/Header";
import { NextArrowButton } from "../../components/Buttons/NextArrowButton";

// import {
//   addTypeVehicle, resetDataState
// } from '../../reducers/todo';
import actions from '../../actions/todo';

import { useDispatch, useSelector } from "react-redux";
// import { loadReport } from "../../services/database/storage";
import useAsyncStorage from "@react-native-async-storage/async-storage";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from "../../hooks/auth";

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';


export function VehicleSelect() {
  const { user } = useAuth();

  const dispatch = useDispatch();
  const [myReports, setMyReports] = useState<any[]>([]);
  const [vehicleChoice, setVehicleChoie] = useState<string>("");

  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  const setTypeVehicle = (data: string) => {
    dispatch(actions.addTypeVehicle(data));
  };

  const handleStart = (value: string) => {
    setModalVisible(true)
    setVehicleChoie(value)
  };

  const handleViewReports = () => {
    navigation.navigate("MyReports");
  };

  const handleContinueReport = (data: any) => {
    dispatch(actions.resetDataState(data));
    // console.log(data)
    setModalVisible(!modalVisible);
    navigation.navigate("NewReport");


  }
  const handleNewReport = () => {
    setTypeVehicle(vehicleChoice);
    navigation.navigate("NewReport");
  }

  const ModalReport = () => {

    return (
      <View >
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
              <View>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Text style={styles.closeModal}> X </Text>

                </TouchableOpacity>

              </View>
              {myReports && (
                <>
                  <Text style={styles.modalText}>Laudos incompletos</Text>
                  <Text style={styles.modalText}>Clique no qual deseja continuar:</Text>

                  {/* <ScrollView style={styles.modalListItem}> */}
                  <View style={styles.modalListItem}>


                    {
                      myReports.map((item: any, index: number) => (


                        <TouchableOpacity key={index} onPress={() => handleContinueReport(item)
                        }>

                          <Text> <Text>{index + 1} - </Text>{item.LaudoVeicular.Data.Cabecalho.Rep}</Text>
                        </TouchableOpacity>

                      ))
                    }
                  </View>
                </>
              )}

              {/* </ScrollView> */}

              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setModalVisible(!modalVisible)
                  handleNewReport()
                }}
              >
                <Text style={styles.textStyle}>Criar um novo</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

      </View>
    );
  };


  useEffect(() => {

    async function loadStorageData() {
      const dataKey = `@laudos_user:${user.id}`;
      const data = await AsyncStorage.getItem(dataKey);
      const reportsStoraged = data ? (JSON.parse(data) as any) : [];
      let reportsFiltered;
      if (reportsStoraged) {
        reportsFiltered = await reportsStoraged.filter((item: any) => item.LaudoVeicular.statusDoLaudo.completo == false)

      }
      console.log(reportsFiltered)
      setMyReports(reportsFiltered);
    }
    loadStorageData();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Header></Header>
      </View>

      <View>
        <Text style={styles.title}> Escolha um veículo</Text>
      </View>
      <ModalReport />

      <View style={styles.vehicles}>
        <View style={styles.cards}>
          {typeVehicles.map(({ title, icone, available }, index) => (
            <VehicleCardPrimary
              key={`VehicleCardPrimary-${index}`}
              title={title}
              icone={icone}
              available={available}
              onPress={() => {
                handleStart(title);
              }}
            />
          ))}
        </View>
        <NextArrowButton
          title="Ver Laudos"
          icone="upload-cloud"
          onPress={handleViewReports}
        />
      </View>
    </View>
  );
}




