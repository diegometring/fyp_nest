import { Injectable, NotFoundException } from '@nestjs/common';
import { Evento } from './entities/evento.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEventoDto } from './dto/create-evento.dto';
import { EventoRepository } from './evento.repository';

@Injectable()
export class EventoService {
  constructor(
    @InjectRepository(Evento) private eventoRepository: EventoRepository,

  ) {}

  async criarEvento(empresaId: number, criarEventoDto: CreateEventoDto): Promise<Evento> {
    const evento = this.eventoRepository.create({
      ...criarEventoDto,
      empresa: { id: empresaId },
    });
    return await this.eventoRepository.save(evento);
  }


  async excluirEvento(empresaId: number, eventoId: number): Promise<void> {
    const evento = await this.eventoRepository.findOne({
      where: { id: eventoId, empresa: { id: empresaId } },
    });
    if (!evento) throw new NotFoundException('Evento não encontrado');

    await this.eventoRepository.remove(evento);
  }

  async listarEventos(): Promise<Evento[]> {
    return await this.eventoRepository.find({ relations: ['empresa'] });
  }
}