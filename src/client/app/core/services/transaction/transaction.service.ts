import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  /**
   * Get transactions by creation dates
   *
   * @returns {Observable<Transaction[]>}
   * @memberof TransactionService
   */
  getByDates(fromDate: string, toDate: string): Observable<Transaction[]> {
    const params = new HttpParams()
      .append('startDate', fromDate)
      .append('endDate', toDate);
    return this.http
      .get<TransactionsDTO>('/api/user/my/transactions', {
        params: params
      })
      .pipe(map(transactionsDTO => transactionsDTO.data));
  }
}
