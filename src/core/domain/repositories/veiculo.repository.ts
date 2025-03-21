import { Veiculo } from '../entities/veiculo.entity';

export interface IVeiculoRepository {
  findAll(): Promise<Veiculo[]>;
  findById(id: number): Promise<Veiculo | null>;
  create(data: Omit<Veiculo, 'id'>): Promise<Veiculo>;
  update(id: number, data: Partial<Veiculo>): Promise<Veiculo>;
  delete(id: number): Promise<void>;

}