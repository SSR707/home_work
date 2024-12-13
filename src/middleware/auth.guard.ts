import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';
import { ErrorException } from 'src/auth/entities/error.excaption';

@Injectable()
export class AuthGuard implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    if (req.url.includes('auth')) {
      return next();
    }
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
      throw new HttpException(
        ErrorException.UNAUHTORIZED().message,
        ErrorException.UNAUHTORIZED().statusCode,
      );
    }
    try {
      const decoded = this.jwtService.verify(token, {
        secret: process.env.ACCESS_SECRET,
      });
      req['user'] = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'INVALID_TOKEN' });
    }
  }
}
