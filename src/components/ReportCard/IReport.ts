export interface ReportCardData {
    LaudoVeicular: {
      id: string;
      Type: string;
      Data: {
        Cabecalho: {
          Rep: number;
          NrdoOficio: number;
          Indiciado: string;
          TipoDeInquerito: string;
          NrdoInquerito: number;
          Secao: string;
          Diretor: string;
          Cidade: string;
          Perito: string;
          NaturezaDoExame: string;
          OrgaoSolicitante: string;
          DataDeDesignacao: string;
          DataDeSolicitacao: string;
        };
        Veiculo: {
          Type: string;
          Data: {
            Placa: string;
            Modelo: string;
            Marca: string;
            AnoModeloFab: string;
            Cor: string;
            EstadoDeConservacao: string;
          };
          Pecas: [
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
  