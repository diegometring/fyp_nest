import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { Ingresso } from 'src/ingresso/entities/ingresso.entity';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) { }

  @Post('cadastrar')
  async registrarUsuario(@Body() criarUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    return this.usuarioService.registrarUsuario(criarUsuarioDto);
  }

  @Post('login')
  async login(@Body('email') email: string, @Body('password') password: string) {
    const usuario = await this.usuarioService.findByEmail(email);

    if (!usuario || usuario.password !== password) {
      return { message: 'E-mail ou senha inválidos' };
    }
    return { message: 'login feito com sucesso', user: { id: usuario.id, email: usuario.email } };
  }

  @Post(':usuarioId/comprar/:eventoId')
  async comprarIngresso(
    @Param('usuarioId') usuarioId: number,
    @Param('eventoId') eventoId: number,
  ): Promise<Ingresso> {
    return this.usuarioService.comprarIngresso(usuarioId, eventoId);
  }

}
//@Get()
// findAll() {
//   return this.usuarioService.findAll();
// }

// @Get(':id')
// findOne(@Param('id') id: string) {
//   return this.usuarioService.findOne(+id);
// }

// @Patch(':id')
// update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
//   return this.usuarioService.update(+id, updateUsuarioDto);
// }

// @Delete(':id')
// remove(@Param('id') id: string) {
//   return this.usuarioService.remove(+id);
// }