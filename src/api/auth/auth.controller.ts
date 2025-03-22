import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpUserDto } from './dto/signup-user.dto';
import { SignInUserDto } from './dto/signin-user.dto';
import { VerifyUserDto } from './dto/verify-user.dto';
import { Public } from 'src/common/decorator/auth.decorator';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth Api')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  @ApiOperation({ summary: 'Login user' })
  signin(@Body() signinAuthDto: SignInUserDto) {
    return this.authService.signin(signinAuthDto);
  }

  @Public()
  @Post('register')
  @ApiOperation({ summary: 'Register user' })
  signup(@Body() signupAuthDto: SignUpUserDto) {
    return this.authService.signup(signupAuthDto);
  }

  @Public()
  @Post('verifyUser')
  @ApiOperation({ summary: 'verify user' })
  verifyUser(@Body() verifyUserDto: VerifyUserDto) {
    return this.authService.verifyUser(verifyUserDto);
  }
}
