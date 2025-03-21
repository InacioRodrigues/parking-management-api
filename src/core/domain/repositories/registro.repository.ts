import { Registro } from '../entities/registro.entity';

export interface IRegistroRepository {
  create(veiculoId: number, tipo: 'entrada' | 'saida'): Promise<Registro>;
  findEntradasSaidasPorHora(): Promise<{ hora: Date; entradas: number; saidas: number }[]>;
}
