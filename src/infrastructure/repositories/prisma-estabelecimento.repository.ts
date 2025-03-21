import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { IEstabelecimentoRepository } from '../../core/domain/repositories/estabelecimento.repository';
import { Estabelecimento } from '../../core/domain/entities/estabelecimento.entity';

@Injectable()
export class PrismaEstabelecimentoRepository implements IEstabelecimentoRepository {
    constructor(private readonly prisma: PrismaService) {}
    
  async findAll(): Promise<Estabelecimento[]> {
    const estabelecimentos = await this.prisma.estabelecimento.findMany();
    return estabelecimentos.map((e) => new Estabelecimento(e.id, e.nome, e.endereco, e.telefone, e.vagasMotos, e.vagasCarros));
  }

  async findById(id: number): Promise<Estabelecimento | null> {
    const estabelecimento = await this.prisma.estabelecimento.findUnique({ where: { id } });
    if (!estabelecimento) return null;
    return new Estabelecimento(estabelecimento.id, estabelecimento.nome, estabelecimento.endereco, estabelecimento.telefone, estabelecimento.vagasMotos, estabelecimento.vagasCarros);
  }

  async create(data: Omit<Estabelecimento, 'id'>): Promise<Estabelecimento> {
    const estabelecimento = await this.prisma.estabelecimento.create({ data });
    return new Estabelecimento(estabelecimento.id, estabelecimento.nome, estabelecimento.endereco, estabelecimento.telefone, estabelecimento.vagasMotos, estabelecimento.vagasCarros);
  }

  async update(id: number, data: Partial<Estabelecimento>): Promise<Estabelecimento> {
    const estabelecimento = await this.prisma.estabelecimento.update({ where: { id }, data });
    return new Estabelecimento(estabelecimento.id, estabelecimento.nome, estabelecimento.endereco, estabelecimento.telefone, estabelecimento.vagasMotos, estabelecimento.vagasCarros);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.estabelecimento.delete({ where: { id } });
  }
}