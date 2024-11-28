import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ingresso } from '../ingresso/entities/ingresso.entity';
import { Usuario } from '../usuario/entities/usuario.entity';
import { v4 as uuidv4 } from 'uuid';
import { UsuarioRepository } from 'src/usuario/usuario.repository';

@Injectable()
export class IngressoService {
  constructor(
    @InjectRepository(Ingresso) private readonly ingressoRepository: Repository<Ingresso>, 
    @InjectRepository(Usuario) private readonly usuarioRepository: UsuarioRepository, 
  ) {}

  async criarIngresso(eventoId: number): Promise<Ingresso> {
    const ingresso = this.ingressoRepository.create({
      evento: { id: eventoId },
      valid: true,
      expired: null,
      code: uuidv4(),
    });

    return await this.ingressoRepository.save(ingresso);
  }

  async comprarIngresso(usuarioId: number, ingressoId: number): Promise<Ingresso> {

    const usuario = await this.usuarioRepository.find({ where: { id: usuarioId } });
    if (!usuario) throw new NotFoundException('Usuário não encontrado');

    const ingresso = await this.ingressoRepository.findOne({
      where: { id: ingressoId, valid: true },
    });
    if (!ingresso) throw new NotFoundException('Ingresso inválido ou já utilizado');
    ingresso.valid = false;

    return await this.ingressoRepository.save(ingresso);
  }
}


// @Injectable()
// export class IngressoService {
//   create(createIngressoDto: CreateIngressoDto) {
//     return 'This action adds a new ingresso';
//   }

  
//   findAll() {
//     return `This action returns all ingresso`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} ingresso`;
//   }

//   update(id: number, updateIngressoDto: UpdateIngressoDto) {
//     return `This action updates a #${id} ingresso`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} ingresso`;
//   }
// }
