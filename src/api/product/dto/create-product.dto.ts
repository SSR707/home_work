import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    type: String,
    description: 'Title of Product',
    example: 'Iphone',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    type: String,
    description: ' Picture of Product',
    example: '.jpg',
  })
  @IsString()
  @IsOptional()
  picture: string;

  @ApiProperty({
    type: String,
    description: 'Summary: of Product',
    example: 'summary...',
  })
  @IsString()
  @IsOptional()
  summary: string;

  @ApiProperty({
    type: String,
    description: 'Description of Product',
    example: 'description...',
  })
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty({
    type: Number,
    description: 'Price of Product',
    example: 10000,
  })
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  price: number;

  @ApiProperty({
    type: String,
    description: 'Discount type of Product',
    example: '1',
  })
  @IsString()
  @IsOptional()
  discount_type: string;

  @ApiProperty({
    type: String,
    description: ' Discount Value of Product',
    example: 'skidka 20%',
  })
  @IsString()
  @IsOptional()
  discount_value: string;

  @ApiProperty({
    type: String,
    description: 'Tags of Product',
    example: 'tags...',
  })
  @IsString()
  @IsOptional()
  tags: string;
}
