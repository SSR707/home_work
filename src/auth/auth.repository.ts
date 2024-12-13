import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthRepository {
    constructor(private readonly jwtService:JwtService){}
    async accessToken(payload: any): Promise<string> {
        return this.jwtService.sign(payload, {
          secret: process.env.ACCESS_SECRET,
          expiresIn: process.env.ACCESS_EXPIRES_IN,
        });
      }
    
      async refreshToken(payload: any): Promise<string> {
        return this.jwtService.sign(payload, {
          secret: process.env.REFRESH_SECRET, 
          expiresIn: process.env.REFRESH_EXPIRES_IN, 
        });
      }

      
    async hashPass(data){
        const salt = await bcrypt.genSalt(10)
        const pass = await bcrypt.hash(data.password , salt)
        return pass
    }
}
