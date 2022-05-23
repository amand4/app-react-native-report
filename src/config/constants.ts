export const typeInquerisOptions = [
  {
    value: "Selecione um tipo de Inquérito",
    label: "Selecione um tipo de Inquérito",
  },
  { value: "B.O", label: "Tipo de inquérito: B.O" },
  { value: "Policial", label: "Tipo de inquérito: Policial" },
];
export const orgaoSolicitanteOptions = [
  {
    value: "Selecione um Órgão Solicitante",
    label: "Selecione um Órgão Solicitante",
  },
  { value: "Fórum", label: "Órgão Solicitante: Fórum" },
  {
    value: "45.ª Del. POLÍCIA DE PITANGA",
    label: "Órgão Solicitante: DS 14º",
  },
];
export const directorsOptions = [
  { value: "Selecione um Diretor", label: "Selecione um Diretor" },
  { value: "Jose Roberto", label: "Diretor: Jose Roberto" },
  { value: "Paulo Silva", label: "Diretor: Paulo Silva" },
];
export const modeloOptions = [
  { value: "Selecione um Modelo", label: "Selecione um Modelo" },
  { value: "CG 160 Fan", label: "Modelo: CG 160 Fan" },
  { value: "CG 160 Titan", label: "Modelo: CG 160 Titan" },
  { value: "Biz 110i", label: "Modelo: Biz 110i" },
];
export const marcaOptions = [
  { value: "Selecione uma Marca", label: "Selecione uma Marca" },
  { value: "Honda", label: "Marca: Honda" },
  { value: "Yamaha", label: "Marca: Yamaha" },
  { value: "Suzuki", label: "Marca: Suzuki" },
];
export const typeVehicles = [
  { title: "Moto", icone: "motorcycle", available: true },
  { title: "Carro", icone: "car", available: false },
  { title: "Caminhão", icone: "truck", available: false },
  { title: "Semi-reboque", icone: "truck-loading", available: false },
];
export const cities = [
  { value: "Selecione uma Cidade", label: "Selecione uma cidade" },
  { value: "Guarapuava", label: "Cidade: Guarapuava" },
  { value: "Turvo", label: "Cidade: Turvo" },
  { value: "Pitanga", label: "Cidade: Pitanga" },
];
export const typeAdulterated = [
  {
    value: "Selecione um Tipo de Adulteração",
    label: "Selecione um tipo de Adulteração",
  },
  { value: "Puncionamento", label: "Metodo de Puncionamento" },
  { value: "Desbaste", label: "Metodo de Desbaste" },
  { value: "Recorte", label: "Metodo de Recorte" },
  { value: "Outro", label: "Outro" },
];
export const naturezaExame = [
  {
    value: "Adulteracao no chassi",
    label: "Selecione a Natureza de Exame",
  },
  {
    value: "Adulteracao no chassi",
    label: "Nat. do Exame: Adulteracao no chassi",
  },
];
export const secao = [
  { value: "Selecione uma Seção", label: "Selecione uma Seção" },
  { value: "Guarapuava", label: "Seção de Guarapuava" },
  { value: "Turvo", label: "Seção de Turvo" },
  { value: "Pitanga", label: "Seção de Pitanga" },
];

export const pieces = [
  { value: "Selecione uma Peça", label: "Selecione uma Peça" },
  { value: "Chassi", label: "Chassi" },
  { value: "Motor", label: "Motor" },
];

export const typeNumbers = [
  {
    value: "Selecione um Tipo de Numeração",
    label: "Selecione um Tipo de Numeração",
  },
  { value: "Adulterado", label: "Adulterado" },
  { value: "Original", label: "Original" },
  { value: "GravacaoAutorizada", label: "Gravação Autorizada" },
  { value: "GravacaoDivergente", label: "Gravação Divergente" },
];

export const stateConservation = [
  { value: "Bom", label: "Bom" },
  { value: "Regular", label: "Regular" },
  { value: "Mau", label: "Mau" },
];

export const optionsStatusReports = [
  { value: "todos", label: "Todos" },
  { value: "incompletos", label: "Incompletos" },
  { value: "enviados", label: "Enviados" },
  { value: "aguardandoEnvio", label: "Aguardando Envio" },
];

const all = {
  modeloOptions,
  marcaOptions,
  typeAdulterated,
  typeNumbers,
  secao,
  typeInquerisOptions,
  orgaoSolicitanteOptions,
  directorsOptions,
  cities,
  naturezaExame,
  pieces,
  stateConservation,
};

export default all;
