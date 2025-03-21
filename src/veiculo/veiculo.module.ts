import { Module } from '@nestjs/common';
import { VeiculoController } from '../interface/controllers/veiculo.controller';
import { VeiculoService } from '../core/application/services/veiculo.service';
import { PrismaVeiculoRepository } from '../infrastructure/repositories/prisma-veiculo.repository';
import { PrismaModule } from 'src/shared/prisma/prisma.module';
import { PrismaService } from 'src/infrastructure/database/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [VeiculoController],
  providers: [
    VeiculoService,
    {
      provide: 'IVeiculoRepository',
      useClass: PrismaVeiculoRepository,
    },
    PrismaService,
  ],
})

export class VeiculoModule {}