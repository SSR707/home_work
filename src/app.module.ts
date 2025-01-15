import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { EmailModule } from './email/email.module';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guard/auth.guard';
import { RolesGuard } from './guard/role.guard';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { User } from './user/entities/user.entity';
import { Order } from './order/entities/order.entity';
import { OrderProductModule } from './order-product/order-product.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('PG_HOST'),
        port: configService.get<number>('PG_PORT'),
        username: configService.get('PG_USER'),
        password: configService.get('PG_PASSWORD'),
        database: configService.get('PG_DATABASE'),
        entities: [__dirname + '/**/*.entity.{js,ts}'],
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    TypeOrmModule.forFeature([User, Order]),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        transport: {
          host: configService.get<string>('SMTP_HOST'),
          port: configService.get<number>('SMTP_PORT'),
          secure: false,
          auth: {
            user: configService.get<string>('USER_MAIL'),
            pass: configService.get<string>('USER_MAIL_PASSWORD'),
          },
        },
        defaults: {
          from: configService.get<string>('SMTP_USER'),
        },
      }),
    }),
    JwtModule.register({}),
    AuthModule,
    UserModule,
    EmailModule,
    OrderModule,
    ProductModule,
    OrderProductModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
