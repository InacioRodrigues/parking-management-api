import { Estabelecimento } from '../entities/estabelecimento.entity';

export interface IEstabelecimentoRepository {
  findAll(): Promise<Estabelecimento[]>;
  findById(id: number): Promise<Estabelecimento | null>;
  create(data: Omit<Estabelecimento, 'id'>): Promise<Estabelecimento>;
  update(id: number, data: Partial<Estabelecimento>): Promise<Estabelecimento>;
  delete(id: number): Promise<void>;
}