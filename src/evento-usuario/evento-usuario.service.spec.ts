import { Test, TestingModule } from '@nestjs/testing';
import { EventoUsuarioService } from './evento-usuario.service';

describe('EventoUsuarioService', () => {
  let service: EventoUsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventoUsuarioService],
    }).compile();

    service = module.get<EventoUsuarioService>(EventoUsuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
