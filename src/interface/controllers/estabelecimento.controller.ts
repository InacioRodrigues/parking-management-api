import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { EstabelecimentoService } from '../../core/application/services/estabelecimento.service';
import { Estabelecimento } from 'src/core/domain/entities/estabelecimento.entity';
import { CreateEstabelecimentoDto } from '../dtos/create-estabelecimento.dto';
import { UpdateEstabelecimentoDto } from '../dtos/update-estabelecimento.dto';

@Controller('estabelecimentos')
export class EstabelecimentoController {
  constructor(private readonly service: EstabelecimentoService) {}

  @Get()
  async findAll(): Promise<Estabelecimento[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Estabelecimento | null> {
    return this.service.findById(id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() data: CreateEstabelecimentoDto) {
    return this.service.create(data);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(@Param('id') id: number, @Body() data: UpdateEstabelecimentoDto) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.service.delete(id);
  }
}