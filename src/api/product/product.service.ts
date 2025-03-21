import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/core/entity/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}
  async create(createProductDto: CreateProductDto) {
    try {
      const product = this.productRepository.create(createProductDto);
      await this.productRepository.save(product);
      return {
        status_code: 201,
        message: 'success',
        data: product,
      };
    } catch (error) {
      throw new BadRequestException(`Product create error: ${error}`);
    }
  }

  async findAll() {
    const products = await this.productRepository.find({
      relations: ['categoty'],
    });
    return {
      status_code: 200,
      message: 'success',
      data: products,
    };
  }

  async findOne(id: string) {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found.`);
    }
    return {
      status_code: 200,
      message: 'success',
      data: product,
    };
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    try {
      const currentProduct = await this.productRepository.findOne({
        where: { id },
      });
      if (!currentProduct) {
        throw new NotFoundException(`Product with id ${id} not found.`);
      }
      await this.productRepository.update(id, {
        ...updateProductDto,
        updated_at: Date.now(),
      });
      return {
        status_code: 200,
        message: 'success',
      };
    } catch (error) {
      throw new BadRequestException(`Error on update categiry: ${error}`);
    }
  }

  async remove(id: string) {
    try {
      const currentProduct = await this.productRepository.findOne({
        where: { id },
      });
      if (!currentProduct) {
        throw new NotFoundException(`Product with id ${id} not found.`);
      }
      await this.productRepository.delete(id);
      return {
        status_code: 200,
        message: 'success',
      };
    } catch (error) {
      throw new BadRequestException(`Error on delete categiry: ${error}`);
    }
  }
}
