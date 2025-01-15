import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateOrderProductDto } from './dto/create-order-product.dto';
import { UpdateOrderProductDto } from './dto/update-order-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderProduct } from './entities/order-product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderProductService {
  constructor(
    @InjectRepository(OrderProduct) private orderProductRepository: Repository<OrderProduct>,
  ) {}

  async create(createOrderProductDto: CreateOrderProductDto) {
    return this.orderProductRepository.create(createOrderProductDto)
  }

  async findAll() {
    return this.orderProductRepository.find({relations: ['Order', 'product'],});
  }

  async findOne(id: number) {
    const orderProduct = await this.orderProductRepository.findOne({ where: { id } , relations: ['Order', 'product'],});
    if (!orderProduct) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return orderProduct;
  }

  async update(id: number, updateOrderProductDto: UpdateOrderProductDto) {
    const orderProduct = await this.orderProductRepository.findOne({ where: { id } });
    if (!orderProduct) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    const newOrderProductData = Object.assign(orderProduct, updateOrderProductDto);
    await this.orderProductRepository.save(newOrderProductData);
    return { status: HttpStatus.OK, message: 'Order Product is Updated' };
  }

  async remove(id: number) {
    const orderProduct = await this.orderProductRepository.findOne({ where: { id } });
    if (!orderProduct) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    await this.orderProductRepository.remove(orderProduct);
    return { status: HttpStatus.OK, message: 'Order Product is Deleted' };
  }
}
