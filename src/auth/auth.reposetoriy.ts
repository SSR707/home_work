import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthReposetoriy {
  constructor(private readonly jwtService: JwtService) {}

  async generateAccessToken(payload: any): Promise<string> {
    return this.jwtService.sign(payload, {
      secret: process.env.JWT_ACCESS_SECRET,
      expiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
    });
  }

  async generateRefreshToken(payload: any): Promise<string> {
    return this.jwtService.sign(payload, {
      secret: process.env.JWT_REFRESH_SECRET, 
      expiresIn: process.env.JWT_REFRESH_EXPIRES_IN, 
    });
  }

  async hashPass(data:any):Promise<string>{
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(data.password, salt);
    return hashPass
  }

}