import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseInterceptors,
  UploadedFile,
  Req,
  Query,
  DefaultValuePipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { Roles } from 'src/decorator/roles.decorator';
import { Role } from 'src/interface/interface';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { FileUpload } from 'src/common/file/file.upload';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  Profile(@Req() req: Request) {
    return this.userService.Profile(req['user'].id);
  }

  @Post('uploadPicture')
  @UseInterceptors(FileUpload())
  uploadFiel(@UploadedFile() file: Express.Multer.File, @Req() req: Request) {
    console.log(file);
    return this.userService.uploadPicture(req['user'].id, file);
  }

  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ) {
    return this.userService.findAll(page , limit);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.SupperAdmin, Role.Admin)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @Roles(Role.SupperAdmin)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }
}
