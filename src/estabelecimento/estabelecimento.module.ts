import { Module } from '@nestjs/common';
import { EstabelecimentoController } from 'src/interface/controllers/estabelecimento.controller';
import { EstabelecimentoService } from 'src/core/application/services/estabelecimento.service';
import { PrismaEstabelecimentoRepository } from 'src/infrastructure/repositories/prisma-estabelecimento.repository';
import { PrismaModule } from 'src/shared/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EstabelecimentoController],
  providers: [
    EstabelecimentoService,
    {
      provide: 'IEstabelecimentoRepository',
      useClass: PrismaEstabelecimentoRepository,
    },
  ],
})
export class EstabelecimentoModule {}