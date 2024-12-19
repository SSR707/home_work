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
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty({name: 'first_name', example:'Jon' })
  @IsString()
  @IsNotEmpty()
  first_name: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({name: 'last_name', example:'Doe' })
  last_name: string;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({name: 'age', example:20 })
  age: number;
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({name: 'email', example:'jondoe@gmail.com' })
  email: string;
  @IsString()
  @IsStrongPassword()
  @IsNotEmpty()
  @ApiProperty({name: 'password', example:'jon004' })
  password: string;

  @IsString()
  @IsEnum(Role)
  @IsOptional()
  role: Role;
}
