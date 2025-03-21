import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { IVeiculoRepository } from '../../domain/repositories/veiculo.repository';
import { Veiculo } from '../../domain/entities/veiculo.entity';
import { CreateVeiculoDto } from 'src/interface/dtos/create-veiculo.dto';

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

  async create(data: CreateVeiculoDto): Promise<Veiculo> {
    try {
      return await this.repository.create(data);
    } catch (error) {
      if (error instanceof ConflictException) {
        throw new ConflictException(error.message);
      }
      throw error;
    }
  }

  async update(id: number, data: Partial<Veiculo>): Promise<Veiculo> {
    return this.repository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    return this.repository.delete(id);
  }
}