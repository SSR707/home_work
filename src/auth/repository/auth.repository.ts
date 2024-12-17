import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { user_payload } from 'src/interface/interface';
@Injectable()
export class AuthRepository {
  constructor(private readonly jwtService: JwtService) {}
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

  async hashPass(password:string) {
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash(password, salt);
    return pass;
  }
}