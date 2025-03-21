import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { VeiculoService } from '../../core/application/services/veiculo.service';
import { CreateVeiculoDto } from '../dtos/create-veiculo.dto';
import { UpdateVeiculoDto } from '../dtos/update-veiculo.dto';
import { Veiculo } from 'src/core/domain/entities/veiculo.entity';

@Controller('veiculos')
export class VeiculoController {
  constructor(private readonly service: VeiculoService) {}

  @Get()
  async findAll(): Promise<Veiculo[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Veiculo | null> {
    return this.service.findById(id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() data: CreateVeiculoDto) {
    return this.service.create(data);
  }


  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(@Param('id') id: number, @Body() data: UpdateVeiculoDto) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.service.delete(id);
  }
}