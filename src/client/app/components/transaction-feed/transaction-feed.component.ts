import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-transaction-feed',
  templateUrl: './transaction-feed.component.html',
  styleUrls: ['./transaction-feed.component.scss']
})
export class TransactionFeedComponent implements OnInit {
  _transactionFeed: { _id: string; position: number; createdDate: string }[];
  displayedColumns: string[] = ['position', 'createdDate', 'actions'];
  @Input() loading: boolean;
  @Output() viewDetail$ = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  /**
   *
   *
   * @memberof TransactionFeedComponent
   */
  @Input()
  set transactionFeed(
    transactions: { _id: string; position: number; createdDate: string }[]
  ) {
    this._transactionFeed =
      transactions.map((t, i) => {
        return {
          _id: t._id,
          position: i + 1,
          createdDate: moment(t.createdDate).format('YYYY-MM-DD')
        };
      }) || [];
  }

  /**
   * Get transaction feed
   *
   * @readonly
   * @type {{ _id: string; position: number; createdDate: string }[]}
   * @memberof TransactionFeedComponent
   */
  get transactionFeed(): { _id: string; position: number; createdDate: string }[] {
    return this._transactionFeed;
  }

  /**
   *
   *
   * @returns {boolean}
   * @memberof TransactionFeedComponent
   */
  isLoadingResults(): boolean {
    if (!isNullOrUndefined(this._transactionFeed)) return false;
    else return true;
  }

  /**
   * Emit event to view transaction detail
   *
   * @param {string} _id
   * @memberof TransactionFeedComponent
   */
  viewDetail(_id: string) {
    this.viewDetail$.emit(_id);
  }
}
