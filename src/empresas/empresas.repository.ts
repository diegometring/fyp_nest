import { EntityRepository, Repository } from 'typeorm';
import { Empresa } from './entities/empresa.entity';

@EntityRepository(Empresa)
export class EmpresasRepository extends Repository<Empresa> { }