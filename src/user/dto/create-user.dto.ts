import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  isString,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { Role } from 'src/interface/interface';
export class CreateUserDto {
  @IsString()
  @IsOptional()
  img:string
  @IsString()
  @IsNotEmpty()
  first_name: string;
  @IsString()
  @IsNotEmpty()
  last_name: string;
  @IsNumber()
  @IsNotEmpty()
  age: number;
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsStrongPassword()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsEnum(Role)
  @IsOptional()
  role: Role;
}
