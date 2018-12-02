import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { ComponentType } from '@angular/cdk/typings/portal';

@Injectable()
export class DialogService {
  private dialogRef: MatDialogRef<any>;

  constructor(private dialog: MatDialog) {}

  openDialogTransactionDetail(component: ComponentType<any>, options?: any) {
    this.dialogRef = this.dialog.open(component, {
      disableClose: false,
      width: '450px',
      panelClass: 'app-dialog-transaction-detail',
      data: options !== undefined ? options.data : {}
    });
    return this.dialogRef;
  }

  close(dialogResult?: any): void {
    this.dialogRef.close(dialogResult);
  }
}
