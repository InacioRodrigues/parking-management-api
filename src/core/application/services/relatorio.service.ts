import { Inject, Injectable } from '@nestjs/common';
import { IRegistroRepository } from '../../domain/repositories/registro.repository';

@Injectable()
export class RelatorioService {
  constructor(
    @Inject('IRegistroRepository')
     private readonly repository: IRegistroRepository) {}

  async getResumoEntradasSaidas() {
    return this.repository.findEntradasSaidasPorHora();
  }
}