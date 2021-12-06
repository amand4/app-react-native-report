export const typeInquerisOptions = [
  { value: "Selecione um tipo", label: "Selecione um tipo" },
  { value: "B.O", label: "Tipo de inquérito: B.O" },
  { value: "Policial", label: "Tipo de inquérito: Policial" },
];
export const orgaoSolicitanteOptions = [
  { value: "Selecione um tipo", label: "Selecione um tipo" },
  { value: "Fórum", label: "Órgão Solicitante: Fórum" },
  { value: "DS 14º", label: "Órgão Solicitante: DS 14º" },
];
export const directorsOptions = [
  { value: "Selecione um tipo", label: "Selecione um tipo" },
  { value: "Jose Roberto", label: "Diretor: Jose Roberto" },
  { value: "Paulo Silva", label: "Diretor: Paulo Silva" },
];
export const modeloOptions = [
  { value: "Selecione um tipo", label: "Selecione um tipo" },
  { value: "CG 160 Fan", label: "Modelo: CG 160 Fan" },
  { value: "CG 160 Titan", label: "Modelo: CG 160 Titan" },
  { value: "Biz 110i", label: "Modelo: Biz 110i" },
];
export const marcaOptions = [
  { value: "Selecione um tipo", label: "Selecione um tipo" },
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
  { value: "Selecione um tipo", label: "Selecione um tipo" },
  { value: "Guarapuava", label: "Cidade: Guarapuava" },
  { value: "Turvo", label: "Cidade: Turvo" },
  { value: "Pitanga", label: "Cidade: Pitanga" },
];
export const typeAdulterated = [
  { value: "Selecione um tipo", label: "Selecione um tipo" },
  // { value: "",  label: "Metodo de adulteração" },
  { value: "Puncionamento", label: "Metodo de Puncionamento" },
  { value: "Desbaste", label: "Metodo de Desbaste" },
  { value: "Recorte", label: "Metodo de Recorte" },
  { value: "Outro", label: "Outro" },
];
export const naturezaExame = [
  { value: "Selecione um tipo", label: "Selecione um tipo" },
  { value: "Adulteracao no chassi", label: "Nat. do Exame: Adulteracao no chassi" },
];
export const secao = [
  { value: "Selecione um tipo", label: "Selecione um tipo" },
  { value: "Guarapuava", label: "Seção de Guarapuava" },
  { value: "Turvo", label: "Seção de Turvo" },
  { value: "Pitanga", label: "Seção de Pitanga" },
];

export const pieces = [
  { value: "Selecione um tipo", label: "Selecione um tipo" },
  { value: "Chassi", label: "Chassi" },

  { value: "Motor", label: "Motor" },

];

export const typeNumbers = [
  { value: "Selecione um tipo", label: "Selecione um tipo" },
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
  stateConservation
}

export default all;