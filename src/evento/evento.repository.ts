import { EntityRepository, Repository } from 'typeorm';
import { Evento } from './entities/evento.entity';

@EntityRepository(Evento)
export class EventoRepository extends Repository<Evento> { }