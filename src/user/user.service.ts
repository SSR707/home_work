import { Inject, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(@Inject('USER_REPO') private readonly userRepository: any) {}
  async findAll(page:number, limit:number) {
    return await this.userRepository.findAll(page , limit);
  }

  async findOne(id: number) {
    return await this.userRepository.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(id , updateUserDto);
  }

  async remove(id: number) {
    return await this.userRepository.remove(id);
  }
}
