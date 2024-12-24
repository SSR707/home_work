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
    const result = controller.update('676a59a67f5ab4d59677830a', newData);
    expect(result).toEqual({});
  });

  it('Transactions update test', () => {
    const newData = { amount: 120};
    const result = controller.update('676a59a67f5ab4d59677830a', newData);
    expect(result).toEqual({});
  });
  it('Transactions find test', () => {
    const result = controller.findAll();
    expect(result).toEqual({});
  });
  it('Transactions findOne test', () => {
    const result = controller.findOne('676a59a67f5ab4d59677830a');
    expect(result).toEqual({});
  });

  it('Transactions findOne test', () => {
    const result = controller.findOne('676a59a67f5ab4d59677830a');
    expect(result).toEqual({});
  });

  it('Transactions delete test', () => {
    const result = controller.remove('676a59a67f5ab4d59677830a');
    expect(result).toEqual({});
  });

  it('Transactions delete test', () => {
    const result = controller.remove('676a59a67f5ab4d59677830a');
    expect(result).toEqual({});
  });
});
