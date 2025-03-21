import { Inject, Injectable } from '@nestjs/common';
import { IRegistroRepository } from 'src/core/domain/repositories/registro.repository';
import { CreateRegistroDto } from 'src/interface/dtos/create-registro.dto';
import { Registro } from 'src/core/domain/entities/registro.entity';

@Injectable()
export class RegistroService {
  constructor(@Inject('IRegistroRepository')
    private readonly repository: IRegistroRepository) {}

  async create(data: CreateRegistroDto): Promise<Registro> {
    return this.repository.create(data.veiculoId, data.tipo);
  }

  async getResumoEntradasSaidas() {
    return this.repository.findEntradasSaidasPorHora();
  }
}