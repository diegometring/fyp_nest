// evento.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventoService } from './evento.service';
import { EventoController } from './evento.controller';
import { Evento } from './entities/evento.entity'; 
import { EventoRepository } from './evento.repository';
import { EmpresasRepository } from 'src/empresas/empresas.repository';
import { Empresa } from 'src/empresas/entities/empresa.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Evento]), 
  ],
  providers: [EventoService],
  exports: [EventoService],
  controllers: [EventoController],
})
export class EventoModule {}