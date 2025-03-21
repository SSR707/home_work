import { HttpStatus, Injectable, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'src/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cors from 'cors';

@Injectable()
export default class Application {
  public static async main(): Promise<void> {
    const app = await NestFactory.create(AppModule);
    app.use(
      cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
      }),
    );
    const api = 'api/v1';
    const swaggerApi = 'api/docs';
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      }),
    );
    app.setGlobalPrefix(api);
    const config_swagger = new DocumentBuilder()
      .setTitle('Nasiya Savdo')
      .setVersion('1.0')
      .addBearerAuth({
        type: 'http',
        scheme: 'Bearer',
        in: 'Header',
      })
      .build();

    const documentFactory = () =>
      SwaggerModule.createDocument(app, config_swagger);

    SwaggerModule.setup(swaggerApi, app, documentFactory);
    await app.listen(config.API_PORT, () => {
      console.log(Date.now());
    });
  }
}
