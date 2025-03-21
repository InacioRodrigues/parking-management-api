import { IsString, IsNotEmpty, IsIn, IsInt } from 'class-validator';

export class CreateVeiculoDto {
  @IsString()
  @IsNotEmpty()
  marca: string;

  @IsString()
  @IsNotEmpty()
  modelo: string;

  @IsString()
  @IsNotEmpty()
  cor: string;

  @IsString()
  @IsNotEmpty()
  placa: string;

  @IsString()
  @IsIn(['carro', 'moto']) 
  tipo: string;
  
  registroId: number | null;

  @IsInt()
  estabelecimentoId: number;
}