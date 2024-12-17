import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Otp } from "src/model/otp";
import { User } from "src/user/entities/user.entity";

export class dbConnection {
  static connect():TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: process.env.PG_HOST,
      port: parseInt(process.env.PG_PORT, 10),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      entities: [User, Otp],
      synchronize: true, 
    };
  }
}
