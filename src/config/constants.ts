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
  { value: "Desbaste/Regravação", label: "Desbaste/Regravação" },
  { value: "Destruição", label: "Destruição" },
  { value: "Transplante", label: "Transplante" },
  { value: "Implante", label: "Implante" },
  { value: "Regravação", label: "Regravação" },
  { value: "2 em 1", label: "2 em 1" },
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

export const optionsTypeTamperingPiece = [
  {
    value: "Selecione um Tipo de Numeração da Peça",
    label: "Selecione um Tipo de Numeração da Peça",
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
export const optionsTypeTampering = [
  {
    value: "Selecione um tipo de adulteração",
    label: "Selecione um tipo de adulteração",
  },
  { value: "Desbaste", label: "Desbaste" },
  { value: "Destruicao", label: "Destruicao" },
  { value: "Implante", label: "Implante" },
  { value: "Regravacao", label: "Regravacao" },
  { value: "Transplante", label: "Transplante" },
  { value: "DoisEmUm", label: "DoisEmUm" },
];

export const optionsMethodTampering = [
  {
    value: "Selecione o método de adulteração",
    label: "Selecione o método de adulteração",
  },
  { value: "Puncionamento", label: "Puncionamento" },
  { value: "Desbaste", label: "Desbaste" },
  { value: "Recorte", label: "Recorte" },
  { value: "Outro", label: "Outro" },
];

export const optionsColors = [
  { value: "Branco", label: "Cor: Branco" },
  { value: "Prata", label: "Cor: Prata" },
  { value: "Cinza", label: "Cor: Cinza" },
  { value: "Vermelho", label: "Cor: Vermelho" },
  { value: "Marrom	", label: "Cor: Marrom" },
  { value: "Azul", label: "Cor: Azul" },
  { value: "Verde", label: "Cor: Verde" },
  { value: "Amarelo", label: "Cor: Amarelo" },
];

const all = {
  modeloOptions,
  marcaOptions,
  typeAdulterated,
  optionsTypeTamperingPiece,
  secao,
  typeInquerisOptions,
  orgaoSolicitanteOptions,
  directorsOptions,
  cities,
  naturezaExame,
  pieces,
  stateConservation,
  optionsColors,
};

export default all;
