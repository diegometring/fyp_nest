import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Timestamp } from 'typeorm';
import { EventoUsuario } from 'src/evento-usuario/entities/evento-usuario.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'timestamp' })
  birthdate: Timestamp;
  
  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => EventoUsuario, (eventoUsuario) => eventoUsuario.usuario)
  eventoUsuarios: EventoUsuario[];
  eventos: any;
}
