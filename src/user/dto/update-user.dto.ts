import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
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

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @IsOptional()
  img?: string;
  @IsString()
  @IsOptional()
  first_name: string;
  @IsString()
  @IsOptional()
  last_name: string;
  @IsNumber()
  @IsOptional()
  age: number;
  @IsString()
  @IsEmail()
  @IsOptional()
  email: string;
  @IsString()
  @IsStrongPassword()
  @IsOptional()
  password: string;

  @IsString()
  @IsEnum(Role)
  @IsOptional()
  role: Role = Role.User;

  @IsBoolean()
  @IsOptional()
  is_Active?: boolean;
}
