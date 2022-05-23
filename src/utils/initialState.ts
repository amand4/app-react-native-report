import uuid from "react-native-uuid";

export const initial_state = {
  currentStep: 1,
  LaudoVeicular: {
    id: uuid.v1(),
    Type: "Veiculo",
    Data: {
      Cabecalho: {
        Rep: "",
        NrdoOficio: "",
        Indiciado: "",
        TipoDeInquerito: 0,
        NrdoInquerito: "",
        Secao: 0,
        Diretor: 0,
        Cidade: 0,
        Perito: 0,
        NaturezaDoExame: 0,
        OrgaoSolicitante: 0,
        DataDeDesignacao: new Date(),
        DataDeSolicitacao: new Date(),
      },
      Veiculo: {
        Type: "",
        Data: {
          Placa: "",
          Modelo: 0,
          Marca: 0,
          AnoModeloFab: "",
          Cor: "",
          EstadoDeConservacao: 0,
        },
        Pieces: [],
        Gallery: [],
      },
    },
    statusDoLaudo: {
      currentStep: 1,
      sincronizado: false,
      oculto: false,
      completo: false,
    },
  },
  tipoDePeca: {
    peca: "",
  },
};
