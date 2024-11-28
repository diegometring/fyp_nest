import { IsString, IsBoolean, IsDate, IsNotEmpty } from 'class-validator';

export class CreateEventoDto {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsString()
    @IsNotEmpty()
    endereco: string;
  
    @IsString()
    @IsNotEmpty()
    city: string;
  
    @IsDate()
    @IsNotEmpty()
    date: Date;
  
    @IsBoolean()
    remote: boolean;
}

