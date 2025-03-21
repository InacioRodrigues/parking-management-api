export class Veiculo {
    constructor(
      public id: number,
      public marca: string,
      public modelo: string,
      public cor: string,
      public placa: string,
      public tipo: string,
      public registroId: number| null,
      public estabelecimentoId: number
    ) {}
  }