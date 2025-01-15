import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';

export class registerAuthDto {
  @IsString()
  @IsNotEmpty()
  fullname: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  @IsStrongPassword()
  @IsNotEmpty()
  password: string;

  @IsString()
  role:string
}
