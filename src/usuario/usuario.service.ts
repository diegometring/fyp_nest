import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { Evento } from 'src/evento/entities/evento.entity';
import { Ingresso } from 'src/ingresso/entities/ingresso.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario) private readonly usuarioRepository: Repository<Usuario>,
    @InjectRepository(Evento) private readonly eventoRepository: Repository<Evento>,
    @InjectRepository(Ingresso) private readonly ingressoRepository: Repository<Ingresso>,
  ) {}

  async registrarUsuario(criarUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const usuario = this.usuarioRepository.create(criarUsuarioDto);
    return await this.usuarioRepository.save(usuario);
  }
  
  async findByEmail(email: string): Promise<Usuario> {
    return this.usuarioRepository.findOne({ where: { email } });
  }
  

  async comprarIngresso(usuarioId: number, eventoId: number): Promise<Ingresso> {
    const usuario = await this.usuarioRepository.findOneOrFail({ where: { id: usuarioId } });
    if (!usuario) throw new NotFoundException('Usuário não encontrado');

    const evento = await this.eventoRepository.findOneOrFail({ where: { id: eventoId } });
    if (!evento) throw new NotFoundException('Evento não encontrado');

    const ingresso = this.ingressoRepository.create({
      code: uuidv4(),
      valid: true,
      expired: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      evento: {id: eventoId},
    });

    return await this.ingressoRepository.save(ingresso);
  }
}


function uuidv4(): import("typeorm").DeepPartial<String> {
  throw new Error('Function not implemented.');
}
  // findAll() {
  //   return `This action returns all usuario`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} usuario`;
  // }

  // update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
  //   return `This action updates a #${id} usuario`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} usuario`;
  // }