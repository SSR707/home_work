import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TransactionsModule } from './transactions/transactions.module';
import { CategoriesModule } from './categories/categories.module';
import { BudgetsModule } from './budgets/budgets.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/buget'),
    AuthModule,
    UserModule,
    TransactionsModule,
    CategoriesModule,
    BudgetsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
