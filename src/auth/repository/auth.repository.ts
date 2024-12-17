import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { user_payload } from 'src/interface/interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { CreateAuthDto } from '../dto/create-auth.dto';
import { Otp } from 'src/model/otp';
@Injectable()
export class AuthRepository {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Otp)
    private otprRepository: Repository<Otp>,
  ) {}
  async accessToken(payload: user_payload): Promise<string> {
    return this.jwtService.sign(payload, {
      secret: process.env.ACCESS_SECRET,
      expiresIn: process.env.ACCESS_EXPIRES_IN,
    });
  }

  async refreshToken(payload: user_payload): Promise<string> {
    return this.jwtService.sign(payload, {
      secret: process.env.REFRESH_SECRET,
      expiresIn: process.env.REFRESH_EXPIRES_IN,
    });
  }

  async hashPass(password: string) {
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash(password, salt);
    return pass;
  }

  async current(email: string) {
    const user = await this.userRepository.query(
      `SELECT * FROM users WHERE email = $1`,
      [email],
    );
    return user;
  }
  async insertUser(data: CreateAuthDto) {
    const id = await this.userRepository.query(
      `
        INSERT INTO users (first_name, last_name, age, email, password, role)
        VALUES ($1 ,$2 , $3 , $4 ,$5 , $6 ) RETURNING id;`,
      [
        data.first_name,
        data.last_name,
        data.age,
        data.email,
        data.password,
        data.role,
      ],
    );
    return id;
  }
  async insertOtp(id: number, otp: string) {
    await this.otprRepository.query(
      `
        INSERT INTO otp (user_id , otp , expire_at )
        VALUES ($1 ,$2 , $3);`,
      [id, otp, new Date(Date.now() + 10 * 60 * 1000)],
    );
  }

  async currentOtp(id: number) {
    const otp = await this.otprRepository.query(
      `SELECT * FROM otp WHERE user_id = $1`,
      [id],
    );
    return otp;
  }
}
