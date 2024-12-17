import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { Role } from 'src/interface/interface';

export class UpdateUserDto extends PartialType(CreateUserDto) {  
    first_name?: string;
    last_name?: string;
    age?: number;
    email?: string;
    password?: string;
    role?: Role;
}
