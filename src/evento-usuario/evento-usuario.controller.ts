import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventoUsuarioService } from './evento-usuario.service';
import { CreateEventoUsuarioDto } from './dto/create-evento-usuario.dto';
import { UpdateEventoUsuarioDto } from './dto/update-evento-usuario.dto';

@Controller('evento-usuario')
export class EventoUsuarioController {
  constructor(private readonly eventoUsuarioService: EventoUsuarioService) {}

  @Post()
  create(@Body() createEventoUsuarioDto: CreateEventoUsuarioDto) {
    return this.eventoUsuarioService.create(createEventoUsuarioDto);
  }

  @Get()
  findAll() {
    return this.eventoUsuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventoUsuarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventoUsuarioDto: UpdateEventoUsuarioDto) {
    return this.eventoUsuarioService.update(+id, updateEventoUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventoUsuarioService.remove(+id);
  }
}
