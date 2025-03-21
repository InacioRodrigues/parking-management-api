import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { IVeiculoRepository } from '../../core/domain/repositories/veiculo.repository';
import { Veiculo } from '../../core/domain/entities/veiculo.entity';

@Injectable()
export class PrismaVeiculoRepository implements IVeiculoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Veiculo[]> {
    const veiculos = await this.prisma.veiculo.findMany();
    return veiculos.map((v) => new Veiculo(v.id, v.marca, v.modelo, v.cor, v.placa, v.tipo, v.registroId, v.estabelecimentoId));
  }

  async findById(id: number): Promise<Veiculo | null> {
    const veiculo = await this.prisma.veiculo.findUnique({ where: { id } });
    if (!veiculo) return null;
    return new Veiculo(veiculo.id, veiculo.marca, veiculo.modelo, veiculo.cor, veiculo.placa, veiculo.tipo, veiculo.registroId, veiculo.estabelecimentoId);
  }

  async create(data: Omit<Veiculo, 'id'> & { registroId: number; estabelecimentoId: number }): Promise<Veiculo> {
    const veiculo = await this.prisma.veiculo.create({ data });
    return new Veiculo(veiculo.id, veiculo.marca, veiculo.modelo, veiculo.cor, veiculo.placa, veiculo.tipo, veiculo.registroId || null, veiculo.estabelecimentoId);
  }

  async update(id: number, data: Partial<Veiculo>): Promise<Veiculo> {
    const veiculo = await this.prisma.veiculo.update({ where: { id }, data });
    return new Veiculo(veiculo.id, veiculo.marca, veiculo.modelo, veiculo.cor, veiculo.placa, veiculo.tipo, veiculo.registroId, veiculo.estabelecimentoId);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.veiculo.delete({ where: { id } });
  }
}