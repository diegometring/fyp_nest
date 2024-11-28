// ingresso.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngressoService } from './ingresso.service';
import { IngressoController } from './ingresso.controller';
import { Ingresso } from './entities/ingresso.entity';  
import { UsuarioModule } from '../usuario/usuario.module';  
import { IngressoRepository } from './ingresso.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Ingresso]),  
    UsuarioModule, 
  ],
  providers: [IngressoService, IngressoRepository],
  controllers: [IngressoController],
})
export class IngressoModule {}
