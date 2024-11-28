import { Controller, Post, Param } from '@nestjs/common';
import { IngressoService } from './ingresso.service';

@Controller('ingressos')
export class IngressoController {
  constructor(private readonly ingressoService: IngressoService) {}

  @Post('comprar/:usuarioId/:ingressoId')
  async comprarIngresso(
    @Param('usuarioId') usuarioId: number,
    @Param('ingressoId') ingressoId: number,
  ) {
    const ingresso = await this.ingressoService.comprarIngresso(usuarioId, ingressoId);
    return {
      message: 'Ingresso comprado com sucesso!',
      ingresso,
    };
  }
}


  // @Get()
  // findAll() {
  //   return this.ingressoService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.ingressoService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateIngressoDto: UpdateIngressoDto) {
  //   return this.ingressoService.update(+id, updateIngressoDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.ingressoService.remove(+id);
  // }