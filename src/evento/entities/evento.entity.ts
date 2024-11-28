import { Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToMany, ManyToOne } from 'typeorm';

import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Empresa } from 'src/empresas/entities/empresa.entity';

@Entity()
export class Evento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: String;

  @Column()
  city: string;

  @Column({ type: 'timestamp' })
  date: Date; 

  @Column({ default: false })
  remote: boolean;  

  @ManyToMany(() => Usuario, (usuario) => usuario.eventoUsuarios)
  usuarios: Usuario[];

  @ManyToOne(() => Empresa, (empresa) => empresa.eventos)
  empresa: Empresa; 
  ingressos: any;
  
  
}