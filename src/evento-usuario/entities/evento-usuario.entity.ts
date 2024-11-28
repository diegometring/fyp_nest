import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Entity()
export class EventoUsuario {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.eventos)
  usuario: Usuario;

}
