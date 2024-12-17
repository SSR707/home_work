import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export class dbConnection {
  static connect():TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: process.env.PG_HOST,
      port: parseInt(process.env.PG_PORT, 10),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      entities: [User],
      synchronize: true, 
    };
  }
}
