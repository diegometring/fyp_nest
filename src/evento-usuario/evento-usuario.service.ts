import { Injectable } from '@nestjs/common';
import { CreateEventoUsuarioDto } from './dto/create-evento-usuario.dto';
import { UpdateEventoUsuarioDto } from './dto/update-evento-usuario.dto';

@Injectable()
export class EventoUsuarioService {
  create(createEventoUsuarioDto: CreateEventoUsuarioDto) {
    return 'This action adds a new eventoUsuario';
  }

  findAll() {
    return `This action returns all eventoUsuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eventoUsuario`;
  }

  update(id: number, updateEventoUsuarioDto: UpdateEventoUsuarioDto) {
    return `This action updates a #${id} eventoUsuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} eventoUsuario`;
  }
}
