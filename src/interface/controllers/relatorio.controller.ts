import { Controller, Get, UseGuards } from '@nestjs/common';
import { RelatorioService } from 'src/core/application/services/relatorio.service';


@Controller('relatorios')
export class RelatorioController {
  constructor(private readonly relatorioService: RelatorioService) {}

  @Get('entradas-saidas')
  async getResumoEntradasSaidas() {
    return this.relatorioService.getResumoEntradasSaidas();
  }
}