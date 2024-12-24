import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionsSchema } from './entities/transaction.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:'transactions' , schema:TransactionsSchema}])],
  controllers: [TransactionsController],
  providers: [TransactionsService],
})
export class TransactionsModule {}
