import {
  Body,
  Post,
  Controller,
  Get,
  Put,
  Delete,
  Param,
  HttpException,
  ExecutionContext,
  Req,
} from '@nestjs/common';
import { UserService } from './users.service';
import { UpdateUserDto } from './dto/update-auth.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userServirce: UserService) {}

  @Get('profile')
  getProfile(@Req() req: Request) {
    try {
      const data = this.userServirce.getProfileService(req['user']);
      return data;
    } catch (error) {
      if (error instanceof HttpException) {
        return {
          status: error.getStatus(),
          message: error.getResponse(),
        };
      }
      console.log(error);
    }
  }

  @Get()
  getAll() {
    try {
      const data = this.userServirce.getAllService();
      return data;
    } catch (error) {
      if (error instanceof HttpException) {
        return {
          status: error.getStatus(),
          message: error.getResponse(),
        };
      }
    }
  }

  @Get(':id')
  getById(@Param() params: any) {
    try {
      const data = this.userServirce.getByIdService(params.id);
      return data;
    } catch (error) {
      if (error instanceof HttpException) {
        return {
          status: error.getStatus(),
          message: error.getResponse(),
        };
      }
    }
  }

  @Put(':id')
  update(@Body() data: UpdateUserDto, @Param() params: any) {
    try {
      const newUser = this.userServirce.updatedService(params.id, data);
      return newUser;
    } catch (error) {
      if (error instanceof HttpException) {
        return {
          status: error.getStatus(),
          message: error.getResponse(),
        };
      }
    }
  }

  @Delete()
  delete(@Param() params: any) {
    try {
      const deleteUser = this.userServirce.deletedService(params.id);
      return deleteUser;
    } catch (error) {
      if (error instanceof HttpException) {
        return {
          status: error.getStatus(),
          message: error.getResponse(),
        };
      }
    }
  }
}
