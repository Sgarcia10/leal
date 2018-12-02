import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTransactionDetailComponent } from './dialog-transaction-detail.component';
import { Transaction } from '../../core/models/transaction';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({ selector: 'app-transaction', template: '' })
class TransactionStubComponent {}

describe('DialogTransactionDetailComponent', () => {
  let component: DialogTransactionDetailComponent;
  let fixture: ComponentFixture<DialogTransactionDetailComponent>;

  beforeEach(async(() => {
    const t: Transaction = {
      _id: 'dasds',
      createdDate: new Date('2018-01-03'),
      points: 10,
      value: 3000,
      type: 'ok',
      userId: 'fsda21'
    };
    TestBed.configureTestingModule({
      declarations: [DialogTransactionDetailComponent, TransactionStubComponent],
      providers: [{ provide: MAT_DIALOG_DATA, useVale: t }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTransactionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
