import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { Usuario } from './entities/usuario.entity';
import { Evento } from '../evento/entities/evento.entity';
import { Ingresso } from '../ingresso/entities/ingresso.entity';
import { EventoUsuario } from 'src/evento-usuario/entities/evento-usuario.entity';
import { Empresa } from 'src/empresas/entities/empresa.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario, Evento, Ingresso, EventoUsuario, Empresa]),
  ],
  controllers: [UsuarioController],
  providers: [UsuarioService],
  exports: [TypeOrmModule], 
})
export class UsuarioModule {}