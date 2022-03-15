import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { ReportCard, ReportCardData } from "./index";

const DEFAULT_PROPS: ReportCardData = {
  LaudoVeicular: {
    id: "string",
    Type: "string",
    Data: {
      Cabecalho: {
        Rep: 1,
        NrdoOficio: 1,
        Indiciado: "string",
        TipoDeInquerito: "string",
        NrdoInquerito: 1,
        Secao: "string",
        Diretor: "string",
        Cidade: "string",
        Perito: "string",
        NaturezaDoExame: "string",
        OrgaoSolicitante: "string",
        DataDeDesignacao: "string",
        DataDeSolicitacao: "string",
      },
      Veiculo: {
        Type: "string",
        Data: {
          Placa: "string",
          Modelo: "string",
          Marca: "string",
          AnoModeloFab: "string",
          Cor: "string",
          EstadoDeConservacao: "string",
        },
        Pecas: [
          {
            Type: "string",
            Data: {
              Integro: {
                Chassi: {
                  Numero: "string",
                  Imagens: "string",
                },
              },
            },
          },
          {
            Type: "string",
            Data: {
              Adulterado: {
                Type: "string",
                Data: {
                  DestruicaoTotal: "string",
                  MetodoDeDestruicao: "string",
                  NumeracaoIdentificadora: [
                    {
                      Type: "string",
                      Data: {
                        Numero: "string",
                        Imagens: "string",
                      },
                    },
                    {
                      Type: "string",
                      Data: {
                        Numero: "string",
                        Imagens: "string",
                      },
                    },
                  ],
                },
              },
            },
          },
        ],
        Gallery: [],
      },
    },
    statusDoLaudo: {
      currentStep: 1,
      sincronizado: true,
      oculto: true,
      completo: true,
    },
  },
  sincronizado: true,
};

describe("Report Card Component", () => {
  it("check if show correcty image card", () => {
    const { getByTestId } = render(<ReportCard data={DEFAULT_PROPS} />);
    expect(getByTestId("reportCardText-test").props.children).toContain("1231");
  });
});
