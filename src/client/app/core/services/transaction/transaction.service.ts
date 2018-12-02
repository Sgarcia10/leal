import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransactionsDTO } from '../../models/transactionsDTO';
import { map } from 'rxjs/operators';
import { Transaction } from '../../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  /**
   *Creates an instance of TransactionService.
   * @param {HttpClient} http
   * @memberof TransactionService
   */
  constructor(private http: HttpClient) {}

  /**
   * Get all transactions
   *
   * @returns {Observable<TransactionsDTO>}
   * @memberof TransactionService
   */
  getAll(): Observable<Transaction[]> {
    return this.http
      .get<TransactionsDTO>('/api/user/my/transactions')
      .pipe(map(transactionsDTO => transactionsDTO.data));
  }
}
