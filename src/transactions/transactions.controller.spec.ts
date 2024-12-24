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
      user_id: '64f22c8b9b9e4b00216f92a1',
      amount: 1200,
      description: 'Maosh',
    };
    const result = controller.create(newData);
    expect(result).toBeDefined();
  });

  it('Transactions create test', () => {
    const newData = {
      user_id: '64f22c8b9b9e4b00216f92a1',
      amount: -300,
      description: 'Oziq-ovqat',
    };
    const result = controller.create(newData);
    expect(result).toEqual({});
  });

  it('Transactions update test', () => {
    const newData = { amount: 1200 };
    const result = controller.update('sadf', newData);
    expect(result).toEqual({});
  });

  it('Transactions update test', () => {
    const newData = { amount: 120};
    const result = controller.update('sadf', newData);
    expect(result).toEqual({});
  });
  it('Transactions find test', () => {
    const result = controller.findAll();
    expect(result).toEqual({});
  });
  it('Transactions findOne test', () => {
    const result = controller.findOne('sdfj');
    expect(result).toEqual({});
  });

  it('Transactions findOne test', () => {
    const result = controller.findOne('sdfj');
    expect(result).toEqual({});
  });

  it('Transactions delete test', () => {
    const result = controller.remove('sdfj');
    expect(result).toEqual({});
  });

  it('Transactions delete test', () => {
    const result = controller.remove('sdfj');
    expect(result).toEqual({});
  });
});
