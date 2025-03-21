import { Module } from '@nestjs/common';
import { RelatorioController } from 'src/interface/controllers/relatorio.controller';
import { RelatorioService } from 'src/core/application/services/relatorio.service';
import { PrismaRegistroRepository } from 'src/infrastructure/repositories/prisma-registro.repository';
import { PrismaModule } from 'src/shared/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RelatorioController],
  providers: [
    RelatorioService,
    {
      provide: 'IRegistroRepository',
      useClass: PrismaRegistroRepository,
    },
  ],
})
export class RelatorioModule {}

