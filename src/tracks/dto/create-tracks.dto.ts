import {
  IsString,
  IsNotEmpty,
  IsBoolean,
} from 'class-validator';
export class CreateTracksDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  
  @IsBoolean()
  @IsNotEmpty()
  grammy: boolean;

}
