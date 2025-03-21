import { Module } from '@nestjs/common';
import { RegistroController } from 'src/interface/controllers/registro.controller';
import { RegistroService } from 'src/core/application/services/registro.service';
import { PrismaModule } from 'src/shared/prisma/prisma.module';
import { PrismaRegistroRepository } from 'src/infrastructure/repositories/prisma-registro.repository';


@Module({
  imports: [PrismaModule],
  controllers: [RegistroController],
  providers: [
    RegistroService,
    {
      provide: 'IRegistroRepository',
      useClass: PrismaRegistroRepository,
    },
  ],
})
export class RegistroModule {}