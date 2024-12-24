import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('service test update', () => {
    const newData = {
      fullname: 'Ali',
    };
    const result = service.update('676a761704e7ada0a69dcd30', newData);
    expect(result).toEqual({ status: 200, id: '676a761704e7ada0a69dcd30' });
  });

  it('service test update', () => {
    const newData = {
      email: 'ali@gmail.com',
    };
    const result = service.update('676a59a67f5ab4d59677830a', newData);
    expect(result).toEqual({ status: 200, id: '676a59a67f5ab4d59677830a' });
  });

  it('service test find', () => {
    const result = service.findAll();
    expect(result).toEqual([
      {
        _id: '676a59a67f5ab4d59677830a',
        fullname: 'Ali',
        age: 20,
        email: 'ali@gmail.com',
        password: 'qwert1234',
        __v: 0,
      },
      {
        _id: '676a761704e7ada0a69dcd30',
        fullname: 'Ali',
        age: 20,
        email: 'alidf@gmail.com',
        password: 'qwert1234',
        __v: 0,
      },
    ]);
  });

  it('service test FindOne', () => {
    const result = service.findOne('676a761704e7ada0a69dcd30');
    expect(service).toEqual({
      status: 200,
      user: {
        _id: '676a59a67f5ab4d59677830a',
        fullname: 'Ali',
        age: 20,
        email: 'alidf@gmail.com',
        password: 'qwert1234',
        __v: 0,
      },
    });
  });

  it('service test delete', () => {
    const result = service.remove('sadfkj');
    expect(service).toEqual({ status: 200, id: '676a59a67f5ab4d59677830a' });
  });
  it('service test delete', () => {
    const result = service.remove('sadfkj');
    expect(service).toEqual({ status: 200, id: '676a761704e7ada0a69dcd30' });
  });
});
