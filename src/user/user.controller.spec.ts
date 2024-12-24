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
      fullname:'Ali'
    }
    const result = controller.update('qweqweqw' ,newData)
    expect(result).toEqual({status:200 , id:'sdfghj'});
  });

  it('Controller Tset Update', () => {
    const newData = {
      email:'ali@gmail.com'
    }
    const result = controller.update('qweqweqw' ,newData)
    expect(result).toEqual({status:200 , id:'sdfghj'});
  });
  it('Controller Tset FindAll', () => {
    const result = controller.findAll()
    expect(result).toEqual([]);
  });
});
