import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { RoleEnum } from 'src/common/enum/user.enums';

export class SignUpUserDto {
  @ApiProperty({
    type: String,
    description: 'Fullname of user',
    example: 'Store001',
  })
  @IsString()
  @IsNotEmpty()
  fullname: string;

  @ApiProperty({
    type: String,
    description: 'Email of user',
    example: 'jhondoe02@gmail.com',
  })
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    type: String,
    description: 'password of user',
    example: 'password123',
  })
  @IsString()
  @IsStrongPassword()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    type: String,
    description: 'Avatar of user',
    example: '.jpg',
  })
  @IsString()
  @IsOptional()
  avatar: string;

  @ApiProperty({
    type: String,
    description: 'Phone Number of user',
    example: '+998997777777',
  })
  @IsString()
  @IsPhoneNumber()
  @IsNotEmpty()
  phone_number: string;

  @ApiProperty({
    type: String,
    description: 'User Role',
    example: 'USER',
    enum: RoleEnum,
    default: RoleEnum.USER,
  })
  role: RoleEnum;
}
