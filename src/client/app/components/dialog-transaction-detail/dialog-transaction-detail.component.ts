import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Transaction } from '../../core/models/transaction';

@Component({
  selector: 'app-dialog-transaction-detail',
  templateUrl: './dialog-transaction-detail.component.html',
  styleUrls: ['./dialog-transaction-detail.component.scss']
})
export class DialogTransactionDetailComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public transaction: Transaction) {}

  ngOnInit() {
    console.log(this.transaction);
  }
}
