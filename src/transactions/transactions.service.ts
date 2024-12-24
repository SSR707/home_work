import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transactions } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel('transactions') private transactionsModel: Model<Transactions>,
  ) {}
  async create(createTransactionDto: CreateTransactionDto) {
    const Transaction = new this.transactionsModel(createTransactionDto);
    await Transaction.save();
    return { status: 201, message: 'Created' };
  }

  async findAll() {
    return this.transactionsModel.find();
  }

  async findOne(id: string) {
    const currentUser = await this.transactionsModel.findOne({
      where: { _id: id },
    });
    if (!currentUser) {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    }
    return currentUser;
  }

  async update(id: string, updateTransactionDto: UpdateTransactionDto) {
    const currentUser = await this.transactionsModel.findOne({
      where: { _id: id },
    });
    if (!currentUser) {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    }
    const newData = {...currentUser , ...updateTransactionDto}
    await this.transactionsModel.findByIdAndUpdate(id , newData)
    return {status:200, id:id};
  }

  async remove(id: string) {
    const currentUser = await this.transactionsModel.findOne({
      where: { _id: id },
    });
    if (!currentUser) {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    }
    await this.transactionsModel.findByIdAndDelete(id)
    return {status:200, id:id};
  }
}
