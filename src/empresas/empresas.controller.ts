import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { EmpresaService } from './empresas.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { Empresa } from './entities/empresa.entity';
import { Evento } from 'src/evento/entities/evento.entity';
import { CreateEventoDto } from '../evento/dto/create-evento.dto';
import { EventoService } from 'src/evento/evento.service';

@Controller('empresa')
export class EmpresaController {
  constructor(
    private readonly empresaService: EmpresaService,
    private readonly eventoService: EventoService,
  ) { }

  @Post('cadastrar')
  async create(@Body() createEmpresaDto: CreateEmpresaDto): Promise<Empresa> {
    return this.empresaService.create(createEmpresaDto);
  }

  @Post('login')
  async login(@Body('email') email: string, @Body('password') password: string) {
    const empresa = await this.empresaService.findByEmail(email);

    if (!empresa || empresa.password !== password) {
      return { message: 'E-mail ou senha inválidos' };
    }
    return { message: 'login feito com sucesso', user: { id: empresa.id, email: empresa.email } };
  }

  @Get('verTodos')
  async findAll(): Promise<Empresa[]> {
    return this.empresaService.findAll();
  }

  @Post(':empresaId/eventos')
  async criarEvento(
    @Param('empresaId') empresaId: number,
    @Body() criarEventoDto: CreateEventoDto,
  ): Promise<Evento> {
    return this.eventoService.criarEvento(empresaId, criarEventoDto);
  }

  @Delete(':empresaId/eventos/:eventoId')
  async excluirEvento(
    @Param('empresaId') empresaId: number,
    @Param('eventoId') eventoId: number,
  ): Promise<void> {
    return this.eventoService.excluirEvento(empresaId, eventoId);
  }

}
