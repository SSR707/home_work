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
    const result = service.update('asdfghaksjd', newData);
    expect(result).toEqual({ status: 200, id: 'sdafgshfkjgh' });
  });

  it('service test update', () => {
    const newData = {
      email: 'ali@gmail.com',
    };
    const result = service.update('asdfghaksjd', newData);
    expect(result).toEqual({ status: 200, id: 'sdafgshfkjgh' });
  });

  it('service test find', () => {
    const result = service.findAll();
    expect(result).toEqual([]);
  });

  it('service test FindOne', () => {
    const result = service.findOne('sadf');
    expect(service).toEqual({});
  });

  it('service test delete', () => {
    const result = service.remove('sadfkj');
    expect(service).toEqual({ status: 200, id: 'dsfkghj' });
  });
  it('service test delete', () => {
    const result = service.remove('sadfkj');
    expect(service).toEqual({ status: 200, id: 'dsfkghj' });
  });
});
