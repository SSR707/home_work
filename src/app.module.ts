import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TransactionsModule } from './transactions/transactions.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/buget'),
    AuthModule,
    UserModule,
    TransactionsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
