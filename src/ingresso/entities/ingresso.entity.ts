import { Evento } from 'src/evento/entities/evento.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Ingresso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'boolean' })
  valid: boolean;

  @Column({ type: 'timestamp' })
  expired: Date;

  @Column({type: 'uuid'})
  code: String;

  @ManyToOne(() => Evento, (evento) => evento.ingressos, { eager: true })
  evento: Evento;
}


