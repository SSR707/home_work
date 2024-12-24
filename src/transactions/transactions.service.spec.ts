import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsService } from './transactions.service';

describe('TransactionsService', () => {
  let service: TransactionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionsService],
    }).compile();

    service = module.get<TransactionsService>(TransactionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Transactions create test', () => {
    const newData = {
      user_id: '676a59a67f5ab4d59677830a',
      amount: 1200,
      description: 'Maosh',
    };
    const result = service.create(newData);
    expect(result).toBeDefined();
  });

  it('Transactions create test', () => {
    const newData = {
      user_id: '676a59a67f5ab4d59677830a',
      amount: -300,
      description: 'Oziq-ovqat',
    };
    const result = service.create(newData);
    expect(result).toEqual({});
  });

  it('Transactions update test', () => {
    const newData = { amount: 1200 };
    const result = service.update('676aa7097a20392ecf3da448', newData);
    expect(result).toEqual({ status: 200 });
  });

  it('Transactions update test', () => {
    const newData = { amount: 120 };
    const result = service.update('676aa6f67a20392ecf3da446', newData);
    expect(result).toEqual({ status: 200 });
  });
  it('Transactions find test', () => {
    const result = service.findAll();
    expect(result).toEqual([
      {
        _id: '676aa6f67a20392ecf3da446',
        user_id: '676a59a67f5ab4d59677830a',
        amount: 1200,
        description: 'Maosh',
        date: '2024-12-24T12:20:06.834Z',
        __v: 0,
      },
      {
        _id: '676aa7097a20392ecf3da448',
        user_id: '676a59a67f5ab4d59677830a',
        amount: 23,
        description: 'amount',
        date: '2024-12-24T12:20:25.447Z',
        __v: 0,
      },
    ]);
  });
  it('Transactions findOne test', () => {
    const result = service.findOne('676aa6f67a20392ecf3da446');
    expect(result).toEqual({
      _id: '676aa6f67a20392ecf3da446',
      user_id: '676a59a67f5ab4d59677830a',
      amount: 1200,
      description: 'Maosh',
      date: '2024-12-24T12:20:06.834Z',
      __v: 0,
    });
  });

  it('Transactions findOne test', () => {
    const result = service.findOne('676aa7097a20392ecf3da448');
    expect(result).toEqual({
      _id: '676aa7097a20392ecf3da448',
      user_id: '676a59a67f5ab4d59677830a',
      amount: 23,
      description: 'amount',
      date: '2024-12-24T12:20:25.447Z',
      __v: 0,
    });
  });

  it('Transactions delete test', () => {
    const result = service.remove('676aa6f67a20392ecf3da446');
    expect(result).toEqual({ status: 200, id: '676aa6f67a20392ecf3da446' });
  });

  it('Transactions delete test', () => {
    const result = service.remove('676aa7097a20392ecf3da448');
    expect(result).toEqual({ status: 200, id: '676aa7097a20392ecf3da448' });
  });
});
