import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('register test ', () => {
    const result = service.register({
      fullname: 'Ali',
      age: 20,
      email: 'ali@gmail.com',
      password: 'qwert1234',
    });
    expect(result).toEqual({ status: 201, message: 'Created' });
  });

  it('register test ', () => {
    const result = service.register({
      fullname: 'Vali',
      age: 19,
      email: 'vali@gmail.com',
      password: '234wqer',
    });
    expect(result).toEqual({ status: 201, message: 'Created' });
  });

  it('login test ', () => {
    const result = service.login({
      email: 'ali@gmail.com',
      password: 'qwert1234',
    });
    expect(result).toEqual({ status: 200, message: 'login' });
  });

  it('login test ', () => {
    const result = service.login({
      email: 'vali@gmail.com',
      password: '234wqer',
    });
    expect(result).toEqual({ status: 200, message: 'login' });
  });
});
