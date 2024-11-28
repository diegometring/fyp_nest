import { Test, TestingModule } from '@nestjs/testing';
import { EventoUsuarioController } from './evento-usuario.controller';
import { EventoUsuarioService } from './evento-usuario.service';

describe('EventoUsuarioController', () => {
  let controller: EventoUsuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventoUsuarioController],
      providers: [EventoUsuarioService],
    }).compile();

    controller = module.get<EventoUsuarioController>(EventoUsuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
