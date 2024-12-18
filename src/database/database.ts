import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Otp } from 'src/model/otp.model';
import { User } from 'src/user/entities/user.entity';

export class Sequelize {
  static connect(): SequelizeModuleOptions {
    return {
      dialect: 'postgres',
      host: process.env.PG_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      models: [User, Otp],
      autoLoadModels: true,
      logging: false,
      synchronize: true,
    };
  }
}
