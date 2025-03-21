import { Controller, Post, Body, UsePipes, ValidationPipe, Get } from '@nestjs/common';
import { CreateRegistroDto } from '../dtos/create-registro.dto';
import { RegistroService } from 'src/core/application/services/registro.service';

@Controller('registros')
export class RegistroController {
  constructor(private readonly service: RegistroService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() data: CreateRegistroDto) {
    return this.service.create(data);
  }

  @Get('entradas-saidas')
  async getResumoEntradasSaidas() {
    return this.service.getResumoEntradasSaidas();
  }
}