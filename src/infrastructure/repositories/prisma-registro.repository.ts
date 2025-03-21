import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { IRegistroRepository } from '../../core/domain/repositories/registro.repository';
import { Registro } from '../../core/domain/entities/registro.entity';

@Injectable()
export class PrismaRegistroRepository implements IRegistroRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(veiculoId: number, tipo: 'entrada' | 'saida'): Promise<Registro> {
    const registro = await this.prisma.registro.create({
      data: { veiculoId, tipo },
    });
    return new Registro(registro.id, registro.veiculoId, registro.tipo, registro.dataHora);
  }

 
  async findEntradasSaidasPorHora(): Promise<{ hora: Date; entradas: number; saidas: number }[]> {
    const registros = await this.prisma.$queryRaw<{ hora: Date; entradas: bigint; saidas: bigint }[]>`
      SELECT
        DATE_TRUNC('hour', "dataHora") AS hora,
        SUM(CASE WHEN tipo = 'entrada' THEN 1 ELSE 0 END) AS entradas,
        SUM(CASE WHEN tipo = 'saida' THEN 1 ELSE 0 END) AS saidas
      FROM "registros"
      GROUP BY hora
      ORDER BY hora;
    `;
  
    // Converter BigInt para Number
    return registros.map(registro => ({
      hora: registro.hora,
      entradas: Number(registro.entradas),
      saidas: Number(registro.saidas),
    }));
  }
}