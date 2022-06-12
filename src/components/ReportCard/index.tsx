import React from "react";
import { Text, View } from "react-native";
import constants from "../../config/constants";

import { AntDesign, MaterialIcons } from "@expo/vector-icons";

import styles from "./styles";

export interface ReportCardData {
  LaudoVeicular: {
    id: string | Uint8Array;
    Type: string;
    Data: {
      Cabecalho: {
        Rep: string;
        NrdoOficio: string;
        Indiciado: string;
        TipoDeInquerito: number;
        NrdoInquerito: string;
        Secao: number;
        Diretor: number;
        Cidade: number;
        Perito: number;
        NaturezaDoExame: number;
        OrgaoSolicitante: number;
        DataDeDesignacao: Date;
        DataDeSolicitacao: Date;
      };
      Veiculo: {
        Type: string;
        Data: {
          Placa: string;
          Modelo: number;
          Marca: number;
          AnoModeloFab: string;
          Cor: string;
          EstadoDeConservacao: number;
        };
        Pieces: [
          {
            Type: string;
            Data: {
              Integro: {
                Chassi: {
                  Numero: string;
                  Imagens: string;
                };
              };
            };
          },
          {
            Type: string;
            Data: {
              Adulterado: {
                Type: string;
                Data: {
                  DestruicaoTotal: string;
                  MetodoDeDestruicao: string;
                  NumeracaoIdentificadora: [
                    {
                      Type: string;
                      Data: {
                        Numero: string;
                        Imagens: string;
                      };
                    },
                    {
                      Type: string;
                      Data: {
                        Numero: string;
                        Imagens: string;
                      };
                    }
                  ];
                };
              };
            };
          }
        ];
        Gallery: [];
      };
    };
    statusDoLaudo: {
      currentStep: number;
      sincronizado: boolean;
      oculto: boolean;
      completo: boolean;
    };
  };
  sincronizado: boolean;
}

interface ReportCardProps {
  data: ReportCardData;
}

export function ReportCard({ data, ...rest }: ReportCardProps): JSX.Element {
  return (
    <View style={styles.container} testID="reportCard-test">
      <View style={styles.content}>
        <Text style={styles.info}>
          Rep:
          <Text style={styles.description} testID="reportCardText-test">
            {data.LaudoVeicular.Data.Cabecalho.Rep}
          </Text>
        </Text>
        <Text style={styles.info}>
          Ofício:
          <Text style={styles.description}>
            {data.LaudoVeicular.Data.Cabecalho.NrdoOficio}
          </Text>
        </Text>
        <Text style={styles.info}>
          Cidade:
          <Text style={styles.description}>
            {constants.cities[data.LaudoVeicular.Data.Cabecalho.Cidade].value}
          </Text>
        </Text>
        <Text style={styles.info}>
          Órgão Solicitante:
          <Text style={styles.description}>
            {
              constants.orgaoSolicitanteOptions[
                data.LaudoVeicular.Data.Cabecalho.OrgaoSolicitante
              ].value
            }
          </Text>
        </Text>
      </View>
      <View style={styles.contentIcon}>
        {data.LaudoVeicular.statusDoLaudo.sincronizado == true && (
          <>
            <AntDesign
              name="checkcircle"
              size={20}
              color="#2DCE89"
              style={styles.icon}
            />
            <Text style={styles.iconeText}>Enviado!</Text>
          </>
        )}

        {data.LaudoVeicular.statusDoLaudo.sincronizado == false &&
          data.LaudoVeicular.statusDoLaudo.completo == false && (
            <>
              <MaterialIcons
                name="error"
                size={20}
                color="red"
                style={styles.icon}
              />
              <Text style={styles.iconeText}>Incompleto!</Text>
            </>
          )}
        {data.LaudoVeicular.statusDoLaudo.sincronizado == false &&
          data.LaudoVeicular.statusDoLaudo.completo == true && (
            <>
              <AntDesign
                name="warning"
                size={20}
                color="#F2EB88"
                style={styles.icon}
              />
              <Text style={styles.iconeText}>Clique para enviar</Text>
            </>
          )}
      </View>
    </View>
  );
}
