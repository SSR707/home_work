import {
  IsString,
  IsNotEmpty,
  IsBoolean,
} from 'class-validator';
export class CreateAlbumsDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  
  @IsBoolean()
  @IsNotEmpty()
  grammy: boolean;

}
