import { isEmail, isNotEmpty, IsNotEmpty } from 'class-validator';
import { Evento } from 'src/evento/entities/evento.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Empresa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  img: string;

  @OneToMany(() => Evento, (evento) => evento.empresa)
  eventos: Evento[];

}
