export class Estabelecimento {
    constructor(
      public id: number,
      public nome: string,
      public endereco: string,
      public telefone: string,
      public vagasMotos: number,
      public vagasCarros: number,
    ) {}
  }