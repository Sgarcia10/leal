import { Transaction } from './transaction';

export interface TransactionsDTO {
  userId: string;
  data: Transaction[];
}
