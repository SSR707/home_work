import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Controller Tset Update', () => {
    const newData = {
      fullname: 'Ali',
    };
    const result = controller.update('676a59a67f5ab4d59677830a', newData);
    expect(result).toEqual({ status: 200, id: '676a59a67f5ab4d59677830a' });
  });

  it('Controller Tset Update', () => {
    const newData = {
      email: 'ali@gmail.com',
    };
    const result = controller.update('676a761704e7ada0a69dcd30', newData);
    expect(result).toEqual({ status: 200, id: '676a761704e7ada0a69dcd30' });
  });
  it('Controller Tset FindAll', () => {
    const result = controller.findAll();
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

  it('Controller Tset FindOne', () => {
    const result = controller.findOne('676a59a67f5ab4d59677830a');
    expect(result).toEqual({
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

  it('Controller Tset FindOne', () => {
    const result = controller.findOne('676a59a67f5ab4d59677830a');
    expect(result).toEqual({ status: 200, id: '676a59a67f5ab4d59677830a' });
  });

  it('Controller Tset Delete', () => {
    const result = controller.remove('676a761704e7ada0a69dcd30');
    expect(result).toEqual({ status: 200, id: '676a761704e7ada0a69dcd30' });
  });
});
