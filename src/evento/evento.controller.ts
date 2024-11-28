import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventoService } from './evento.service';
import { CreateEventoDto } from './dto/create-evento.dto';
import { Evento } from './entities/evento.entity';

@Controller('eventos')
export class EventoController {
  constructor(private readonly eventoService: EventoService) { }

  @Get('/listarTodos')
  async listarEventos(): Promise<Evento[]> {
    return this.eventoService.listarEventos();
  }

  @Delete(':empresaId/eventos/:eventoId')
  async excluirEvento(
    @Param('empresaId') empresaId: number,
    @Param('eventoId') eventoId: number,
  ): Promise<void> {
    await this.eventoService.excluirEvento(empresaId, eventoId);
  }
}
