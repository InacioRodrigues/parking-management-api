import { Inject, Injectable } from '@nestjs/common';
import { IVeiculoRepository } from '../../domain/repositories/veiculo.repository';
import { Veiculo } from '../../domain/entities/veiculo.entity';

@Injectable()
export class VeiculoService {
  constructor(  @Inject('IVeiculoRepository')
    private readonly repository: IVeiculoRepository) {}

  async findAll(): Promise<Veiculo[]> {
    return this.repository.findAll();
  }

  async findById(id: number): Promise<Veiculo | null> {
    return this.repository.findById(id);
  }

  async create(data: Omit<Veiculo, 'id'>): Promise<Veiculo> {
    return this.repository.create(data);
  }

  async update(id: number, data: Partial<Veiculo>): Promise<Veiculo> {
    return this.repository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    return this.repository.delete(id);
  }
}