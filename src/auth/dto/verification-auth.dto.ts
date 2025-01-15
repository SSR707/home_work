import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class verificationAuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  @IsNotEmpty()
  otp_code: number;
}
