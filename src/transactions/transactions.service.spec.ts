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
      user_id: '64f22c8b9b9e4b00216f92a1',
      amount: 1200,
      description: 'Maosh',
    };
    const result = service.create(newData);
    expect(result).toBeDefined();
  });

  it('Transactions create test', () => {
    const newData = {
      user_id: '64f22c8b9b9e4b00216f92a1',
      amount: -300,
      description: 'Oziq-ovqat',
    };
    const result = service.create(newData);
    expect(result).toEqual({});
  });

  it('Transactions update test', () => {
    const newData = { amount: 1200 };
    const result = service.update('sadf', newData);
    expect(result).toEqual({});
  });

  it('Transactions update test', () => {
    const newData = { amount: 120 };
    const result = service.update('sadf', newData);
    expect(result).toEqual({});
  });
  it('Transactions find test', () => {
    const result = service.findAll();
    expect(result).toEqual({});
  });
  it('Transactions findOne test', () => {
    const result = service.findOne('sdfj');
    expect(result).toEqual({});
  });

  it('Transactions findOne test', () => {
    const result = service.findOne('sdfj');
    expect(result).toEqual({});
  });

  it('Transactions delete test', () => {
    const result = service.remove('sdfj');
    expect(result).toEqual({});
  });

  it('Transactions delete test', () => {
    const result = service.remove('sdfj');
    expect(result).toEqual({});
  });
});
