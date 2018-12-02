import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-transaction-feed',
  templateUrl: './transaction-feed.component.html',
  styleUrls: ['./transaction-feed.component.scss']
})
export class TransactionFeedComponent implements OnInit {
  _transactionFeed: { position: number; createdDate: string }[];
  displayedColumns: string[] = ['position', 'createdDate', 'actions'];
  constructor() {}

  ngOnInit() {
    console.log(this.transactionFeed);
  }

  @Input()
  set transactionFeed(transactions: { position: number; createdDate: string }[]) {
    this._transactionFeed =
      transactions.map(t => {
        return {
          position: t.position,
          createdDate: moment(t.createdDate).format('YYYY-MM-DD')
        };
      }) || [];
  }

  get transactionFeed(): { position: number; createdDate: string }[] {
    return this._transactionFeed;
  }

  isLoadingResults(): boolean {
    if (!isNullOrUndefined(this._transactionFeed)) return false;
    else return true;
  }
}
