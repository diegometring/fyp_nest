import { Module } from '@nestjs/common';
import { EventoUsuarioService } from './evento-usuario.service';
import { EventoUsuarioController } from './evento-usuario.controller';

@Module({
  controllers: [EventoUsuarioController],
  providers: [EventoUsuarioService],
})
export class EventoUsuarioModule {}
