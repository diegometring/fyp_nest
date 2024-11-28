import { Module } from '@nestjs/common';
import { EventoModule } from './evento/evento.module';  
import { TypeOrmModule } from '@nestjs/typeorm';  
import { Evento } from './evento/entities/evento.entity';
import { Usuario } from './usuario/entities/usuario.entity';
import { Empresa } from './empresas/entities/empresa.entity';
import { EventoUsuario } from './evento-usuario/entities/evento-usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';
import { EmpresasModule } from './empresas/empresas.module';
import { EventoUsuarioModule } from './evento-usuario/evento-usuario.module';
import { IngressoModule } from './ingresso/ingresso.module';
import { Ingresso } from './ingresso/entities/ingresso.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',  
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'fyp_mest',
      entities: [Evento, Usuario, Empresa, Ingresso, EventoUsuario],  
      synchronize: true,
    }),
    EventoModule,
    UsuarioModule,
    EmpresasModule, 
    EventoUsuarioModule,
    IngressoModule
  ],
})
export class AppModule {}