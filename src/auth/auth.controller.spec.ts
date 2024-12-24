import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('register test ', () => {
    const result = controller.register({
      fullname: 'Ali',
      age: 20,
      email: 'ali@gmail.com',
      password: 'qwert1234',
    });
    expect(result).toEqual({ status: 201, message: 'Created' });
  });

  it('register test ', () => {
    const result = controller.register({
      fullname: 'Vali',
      age: 19,
      email: 'vali@gmail.com',
      password: '234wqer',
    });
    expect(result).toEqual({ status: 201, message: 'Created' });
  });

  it('login test ', () => {
    const result = controller.login({
      email: 'ali@gmail.com',
      password: 'qwert1234',
    });
    expect(result).toEqual({ status: 200, message: 'login' });
  });

  it('login test ', () => {
    const result = controller.login({
      email: 'vali@gmail.com',
      password: '234wqer',
    });
    expect(result).toEqual({ status: 200, message: 'login' });
  });
});
