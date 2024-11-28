import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empresa } from './entities/empresa.entity';
import { EmpresaController } from './empresas.controller';
import { EmpresaService } from './empresas.service';
import { EventoModule } from '../evento/evento.module';
import { Evento } from 'src/evento/entities/evento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Empresa]), 
    EventoModule
  ],
  controllers: [EmpresaController],
  providers: [EmpresaService],
  exports: [EmpresaService],
})
export class EmpresasModule {} 
