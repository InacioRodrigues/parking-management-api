import { IsInt, IsIn } from 'class-validator';

export class CreateRegistroDto {
  @IsInt()
  veiculoId: number;

  @IsIn(['entrada', 'saida'])
  tipo: 'entrada' | 'saida';  
}

