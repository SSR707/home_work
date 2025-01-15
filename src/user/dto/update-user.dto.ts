import { PartialType } from '@nestjs/mapped-types';
import { registerAuthDto } from 'src/auth/dto/register-auth.dto';

export class UpdateUserDto extends PartialType(registerAuthDto) {}
