import {
  CanActivate,
  ExecutionContext,
  HttpException,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { ErrorException } from 'src/auth/entities/error.excaption';
import { Reflector } from '@nestjs/core';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly reflecotr: Reflector,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflecotr.get<Boolean>(
      'isPublic',
      context.getHandler(),
    );
    if(isPublic){
      return true
    }
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new HttpException(
        ErrorException.UNAUHTORIZED().message,
        ErrorException.UNAUHTORIZED().statusCode,
      );
    }
    try {
      const payload = await this.jwtService.verify(token, {
        secret: process.env.ACCESS_SECRET,
      });
      request['user'] = payload;
    } catch (error) {
      throw new HttpException(
        ErrorException.UNAUHTORIZED().message,
        ErrorException.UNAUHTORIZED().statusCode,
      );
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ');
    return type === 'Bearer' ? token : undefined;
  }
}
