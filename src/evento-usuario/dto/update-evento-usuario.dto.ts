import { PartialType } from '@nestjs/mapped-types';
import { CreateEventoUsuarioDto } from './create-evento-usuario.dto';

export class UpdateEventoUsuarioDto extends PartialType(CreateEventoUsuarioDto) {}
