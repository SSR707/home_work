import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order) private orderRepository: Repository<Order>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async create(createOrderDto: CreateOrderDto, id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    const order = this.orderRepository.create({
      ...createOrderDto,
      user,
    });
    return this.orderRepository.save(order);
  }

  async findAll() {
    return this.orderRepository.find({ relations: ['user'] });
  }

  async findOne(id: number) {
    const order = await this.orderRepository.findOne({
      where: { id },
      relations: ['user'],
    });
    if (!order) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return order;
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const order = await this.orderRepository.findOne({ where: { id } });
    if (!order) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    const newOrderData = Object.assign(order, updateOrderDto);
    await this.orderRepository.save(newOrderData);
    return { status: HttpStatus.OK, message: 'Order is Updated' };
  }

  async remove(id: number) {
    const order = await this.orderRepository.findOne({ where: { id } });
    if (!order) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    await this.orderRepository.remove(order);
    return { status: HttpStatus.OK, message: 'Order is Deleted' };
  }
}
