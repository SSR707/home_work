import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}
  async create(createProductDto: CreateProductDto) {
    return this.productRepository.create(createProductDto);
  }

  async findAll() {
    return this.productRepository.find({ relations: ['orderProducts'] });
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOne({
      where: { id },
      relations: ['orderProducts'],
    });
    if (!product) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    const newProductData = Object.assign(product, updateProductDto);
    await this.productRepository.save(newProductData);
    return { status: HttpStatus.OK, message: 'Product is Updated' };
  }

  async remove(id: number) {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    await this.productRepository.remove(product);
    return { status: HttpStatus.OK, message: 'Product is Deleted' };
  }
}
