import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/core/entity/user.entity';
import { Repository } from 'typeorm';
import { BcryptEncryption } from 'src/infrastructure/lib/bcrypt/bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}
  async findAll() {
    const users = await this.userRepository.find({
      where: { is_active: true },
      relations: ['address'],
    });
    return {
      status_code: 200,
      message: 'OK',
      data: users,
    };
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne({ where: { id } , relations: ['address'] });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found.`);
    }
    return {
      status_code: 200,
      message: 'OK',
      data: user,
    };
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const currentUser = await this.userRepository.findOne({ where: { id } });
      if (!currentUser) {
        throw new NotFoundException(`User with id ${id} not found.`);
      }
      if (updateUserDto.password) {
        updateUserDto.password = await BcryptEncryption.encrypt(
          updateUserDto.password,
        );
      }
      await this.userRepository.update(id, {
        ...updateUserDto,
        updated_at: Date.now(),
      });
      return {
        status_code: 200,
        message: 'success',
      };
    } catch (error) {
      throw new BadRequestException(
        `Error on update profile of user: ${error}`,
      );
    }
  }

  async remove(id: string) {
    try {
      const currentUser = await this.userRepository.findOne({ where: { id } });
      if (!currentUser) {
        throw new NotFoundException(`User with id ${id} not found.`);
      }
      await this.userRepository.delete(id);
      return {
        status_code: 200,
        message: 'success',
      };
    } catch (error) {
      throw new BadRequestException(`Error on delete  of user: ${error}`);
    }
  }
}
