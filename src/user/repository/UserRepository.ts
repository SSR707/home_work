import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(page: number, limit: number) {
    const data = await this.userRepository.query(
      `SELECT * FROM users LIMIT $1 OFFSATE $2`,
      [limit, page],
    );
    return data;
  }

  async findOne(id: number) {
    const data = await this.userRepository.query(
      `SELECT * FROM users WHERE id = $1`,
      [id],
    );
    if (!data) {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    }
    return data;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const currentUser = await this.userRepository.query(
      `SELECT * FROM users WHERE id = $1`,
      [id],
    );
    if (!currentUser) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    if (updateUserDto.password && updateUserDto.role) {
      throw new HttpException('No Access', HttpStatus.CONFLICT);
    }
    const newData = { ...currentUser, ...updateUserDto };
    const user = await this.userRepository.query(
      `UPDATE users 
      SET first_name = $1 , 
      last_name = $2 , 
      age = $3,
      email = $4
      WHERE id = $5 
      RETURNING id`,
      [newData.first_name, newData.last_name, newData.age, newData.email, id],
    );
    return user[0];
  }

  async remove(id: number) {
    const currentUser = await this.userRepository.query(
      `SELECT * FROM users WHERE id = $1`,
      [id],
    );
    if (!currentUser) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    const deleteUser = await this.userRepository.query(
      `DELETE FROM users WHERE id = $1 RETURNING id`,
      [id],
    );
    return deleteUser[0];
  }
}
