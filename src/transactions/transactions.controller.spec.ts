import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';

describe('TransactionsController', () => {
  let controller: TransactionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactionsController],
      providers: [TransactionsService],
    }).compile();

    controller = module.get<TransactionsController>(TransactionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Transactions create test', () => {
    const newData = {
      user_id: '676a59a67f5ab4d59677830a',
      amount: 1200,
      description: 'Maosh',
    };
    const result = controller.create(newData);
    expect(result).toBeDefined();
  });

  it('Transactions create test', () => {
    const newData = {
      user_id: '676a59a67f5ab4d59677830a',
      amount: -300,
      description: 'Oziq-ovqat',
    };
    const result = controller.create(newData);
    expect(result).toEqual({});
  });

  it('Transactions update test', () => {
    const newData = { amount: 1200 };
    const result = controller.update('676aa7097a20392ecf3da448', newData);
    expect(result).toEqual({ status: 200 });
  });

  it('Transactions update test', () => {
    const newData = { amount: 120 };
    const result = controller.update('676aa6f67a20392ecf3da446', newData);
    expect(result).toEqual({ status: 200 });
  });
  it('Transactions find test', () => {
    const result = controller.findAll();
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
    const result = controller.findOne('676aa6f67a20392ecf3da446');
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
    const result = controller.findOne('676aa7097a20392ecf3da448');
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
    const result = controller.remove('676aa6f67a20392ecf3da446');
    expect(result).toEqual({ status: 200, id: '676aa6f67a20392ecf3da446' });
  });

  it('Transactions delete test', () => {
    const result = controller.remove('676aa7097a20392ecf3da448');
    expect(result).toEqual({ status: 200, id: '676aa7097a20392ecf3da448' });
  });
});
