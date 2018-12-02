import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthState, AuthActions } from '../../store/auth';
import { selectAuth } from '../../store';
import { select, Store } from '@ngrx/store';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';
import { User } from '../../core/models/user';
import { TransactionsDTO } from '../../core/models/transactionsDTO';
import { TransactionService } from '../../core/services/transaction/transaction.service';
import { Transaction } from '../../core/models/transaction';
import { DialogService } from '../../core/services/utils/dialog.service';
import { DialogTransactionDetailComponent } from '../../components/dialog-transaction-detail/dialog-transaction-detail.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  authState$: Observable<AuthState>;
  currentUser: User;
  transactions: Transaction[];
  loadingTransactions: boolean;

  /**
   *Creates an instance of UserComponent.
   * @param {Store<AuthState>} store
   * @memberof UserComponent
   */
  constructor(
    private store: Store<AuthState>,
    private router: Router,
    private transactionService: TransactionService,
    private dialogService: DialogService
  ) {
    this.currentUser = null;
    this.authState$ = this.store.pipe(select(selectAuth));
    this.authState$.subscribe(state => {
      if (state && isNullOrUndefined(state.user)) {
        this.router.navigate(['/login']);
      } else {
        this.currentUser = state.user;
      }
    });
  }

  ngOnInit() {
    this.loadingTransactions = true;
    this.transactionService.getAll().subscribe(data => {
      this.transactions = data;
      this.loadingTransactions = false;
    });
  }

  /**
   * Dispatch logout action
   *
   * @memberof UserComponent
   */
  logout(): void {
    this.store.dispatch(new AuthActions.Logout());
  }

  /**
   *
   *
   * @readonly
   * @type {string}
   * @memberof UserComponent
   */
  get fullName(): string {
    if (!isNullOrUndefined(this.currentUser)) {
      return `${this.currentUser.firstName} ${this.currentUser.lastName}`;
    }
    return '';
  }

  get email(): string {
    if (!isNullOrUndefined(this.currentUser)) {
      return `${this.currentUser.email}`;
    }
    return '';
  }

  get transactionFeed(): { _id: string; position: number; createdDate: Date }[] {
    if (!isNullOrUndefined(this.transactions)) {
      return this.transactions.map((transaction, i) => {
        return {
          _id: transaction._id,
          position: i + 1,
          createdDate: transaction.createdDate
        };
      });
    }
    return [];
  }

  viewDetail(_id: string) {
    const currentTransaction = this.transactions.find(
      transaction => transaction._id === _id
    );
    this.dialogService.openDialogTransactionDetail(DialogTransactionDetailComponent, {
      data: currentTransaction
    });
  }

  filterByDate($event: { fromDate: string; toDate: string }) {
    this.loadingTransactions = true;
    this.transactionService.getByDates($event.fromDate, $event.toDate).subscribe(data => {
      this.loadingTransactions = false;
      this.transactions = data;
    });
  }
}
