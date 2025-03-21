import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstabelecimentoModule } from './estabelecimento/estabelecimento.module';
import { VeiculoModule } from './veiculo/veiculo.module';
import { RelatorioModule } from './relatorio/relatorio.module';
import { RegistroModule } from './registro/registro.module';



@Module({
  imports: [EstabelecimentoModule, VeiculoModule, RelatorioModule, RegistroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
