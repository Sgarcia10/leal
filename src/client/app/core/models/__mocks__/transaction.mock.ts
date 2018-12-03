import { Transaction } from '../transaction';

const getDefaults = (): Transaction => ({
  _id: 'mock id',
  createdDate: new Date('2018-12-05'),
  points: 10,
  type: 'mock type',
  userId: 'mock user id',
  value: 10000
});

export const getTransactionMock = (p?: Partial<Transaction>): Transaction => ({
  ...getDefaults(),
  ...p
});
