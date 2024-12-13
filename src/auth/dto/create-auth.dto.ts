import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsInt,
} from 'class-validator';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  fullname: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsInt()
  @IsNotEmpty()
  version: number;
}
