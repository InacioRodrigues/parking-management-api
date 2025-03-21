import { IsString, IsNotEmpty, IsPhoneNumber, IsInt, Min } from 'class-validator';

export class CreateEstabelecimentoDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  endereco: string;

  @IsPhoneNumber('AO') 
  telefone: string;

  @IsInt()
  @Min(0)
  vagasMotos: number;

  @IsInt()
  @Min(0)
  vagasCarros: number;
}