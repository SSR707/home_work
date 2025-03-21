import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from 'src/core/entity/product.entity';
import { FileModule } from 'src/infrastructure/lib/file';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity]), FileModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
