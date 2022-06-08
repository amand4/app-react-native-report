import uuid from "react-native-uuid";

import { combineReducers, AnyAction } from "redux";

const INITIAL_STATE = {
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
        Gallery: [] as any,
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
  sincronizado: false,
};

const reportReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case "ADD_REP":
      state.LaudoVeicular.Data.Cabecalho.Rep = action.payload;
      break;

    case "ADD_NR-OFFICE":
      state.LaudoVeicular.Data.Cabecalho.NrdoOficio = action.payload;
      break;
    case "ADD_INITIATED":
      state.LaudoVeicular.Data.Cabecalho.Indiciado = action.payload;
      break;
    case "ADD_TYPE-INQUIRY":
      state.LaudoVeicular.Data.Cabecalho.TipoDeInquerito = action.payload;
      break;
    case "ADD_NR-INQUIRY":
      state.LaudoVeicular.Data.Cabecalho.NrdoInquerito = action.payload;
      break;
    case "ADD_CITY":
      state.LaudoVeicular.Data.Cabecalho.Cidade = action.payload;
      break;
    case "ADD_DIRECTOR":
      state.LaudoVeicular.Data.Cabecalho.Diretor = action.payload;

      break;
    case "ADD_SECTION":
      state.LaudoVeicular.Data.Cabecalho.Secao = action.payload;
      break;

    case "ADD_EXPERT":
      state.LaudoVeicular.Data.Cabecalho.Perito = action.payload;
      break;
    case "ADD_EXAM-NATURE":
      state.LaudoVeicular.Data.Cabecalho.NaturezaDoExame = action.payload;
      break;
    case "ADD_REQUEST-AGENCY":
      state.LaudoVeicular.Data.Cabecalho.OrgaoSolicitante = action.payload;
      break;

    case "ADD_DATE-DESIGNATION":
      state.LaudoVeicular.Data.Cabecalho.DataDeDesignacao = action.payload;
      break;

    case "ADD_DATE-REQUEST":
      state.LaudoVeicular.Data.Cabecalho.DataDeSolicitacao = action.payload;
      break;

    case "ADD_PLATE":
      state.LaudoVeicular.Data.Veiculo.Data.Placa = action.payload;
      break;

    case "ADD_MODEL":
      state.LaudoVeicular.Data.Veiculo.Data.Modelo = action.payload;
      break;
    case "ADD_BRAND":
      state.LaudoVeicular.Data.Veiculo.Data.Marca = action.payload;
      break;
    case "ADD_YEAR-MODEL-FAB":
      state.LaudoVeicular.Data.Veiculo.Data.AnoModeloFab = action.payload;
      break;
    case "ADD_COLOR":
      state.LaudoVeicular.Data.Veiculo.Data.Cor = action.payload;
      break;
    case "ADD_CONSERVATION-STATE":
      state.LaudoVeicular.Data.Veiculo.Data.EstadoDeConservacao =
        action.payload;
      break;

    case "ADD_TYPE_PIECE":
      state.tipoDePeca.peca = action.payload;
      break;
    case "ADD_IMAGES":
      return {
        ...state,
        LaudoVeicular: {
          ...state.LaudoVeicular,
          Data: {
            ...state.LaudoVeicular.Data,
            Veiculo: {
              ...state.LaudoVeicular.Data.Veiculo,
              Gallery: state.LaudoVeicular.Data.Veiculo.Gallery.concat(
                action.payload
              ),
            },
          },
        },
      };
      break;
    case "REMOVE_PIECE":
      return {
        ...state,
        LaudoVeicular: {
          ...state.LaudoVeicular,
          Data: {
            ...state.LaudoVeicular.Data,
            Veiculo: {
              ...state.LaudoVeicular.Data.Veiculo,
              Pieces: state.LaudoVeicular.Data.Veiculo.Pieces.filter(
                (obj: any) => obj["Type"] != action.payload
              ),
            },
          },
        },
      };
    case "ADD_PIECE":
      return {
        ...state,
        LaudoVeicular: {
          ...state.LaudoVeicular,
          Data: {
            ...state.LaudoVeicular.Data,
            Veiculo: {
              ...state.LaudoVeicular.Data.Veiculo,
              Pieces: state.LaudoVeicular.Data.Veiculo.Pieces.concat(
                action.payload
              ),
            },
          },
        },
      };

    case "ADD_TYPE_VEHICLE":
      state.LaudoVeicular.Data.Veiculo.Type = action.payload;
      break;
    case "ADD_SYNCHRONIZED":
      state.LaudoVeicular.statusDoLaudo.sincronizado = action.payload;

      break;
    case "UPDATE_STEP":
      state.currentStep = action.payload;

      break;
    case "RESET":
      state = action.payload;
      break;

    case "RESET_DATA":
      state = action.payload;
      break;
  }
  return { ...state };
};

export default combineReducers({
  reportReducer: reportReducer,
});
