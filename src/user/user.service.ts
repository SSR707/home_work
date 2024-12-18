import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORIY') private readonly userRepository: any,
  ) {}
  Profile(id:number) {
    return this.userRepository.Profile(id);
  }
  findAll(page:number , limit:number) {
    return this.userRepository.findAll(page , limit);
  }

  findOne(id: number) {
    return this.userRepository.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }

  uploadPicture(id:number ,file:any) {
    return this.userRepository.uploadPicture(id ,file);
  }
}
