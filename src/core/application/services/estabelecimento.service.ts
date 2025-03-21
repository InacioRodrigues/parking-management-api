import { Inject, Injectable } from '@nestjs/common';
import { IEstabelecimentoRepository } from '../../domain/repositories/estabelecimento.repository';
import { Estabelecimento } from '../../domain/entities/estabelecimento.entity';

@Injectable()
export class EstabelecimentoService {
  constructor(
     @Inject('IEstabelecimentoRepository') private readonly repository: IEstabelecimentoRepository
    ) {}

  async findAll(): Promise<Estabelecimento[]> {
    return this.repository.findAll();
  }

  async findById(id: number): Promise<Estabelecimento | null> {
    return this.repository.findById(id);
  }

  async create(data: Omit<Estabelecimento, 'id'>): Promise<Estabelecimento> {
    return this.repository.create(data);
  }

  async update(id: number, data: Partial<Estabelecimento>): Promise<Estabelecimento> {
    return this.repository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    return this.repository.delete(id);
  }
}