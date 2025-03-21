export class Registro {
    constructor(
      public id: number,
      public veiculoId: number,
      public tipo: string,
      public dataHora: Date,
    ) {}
  }