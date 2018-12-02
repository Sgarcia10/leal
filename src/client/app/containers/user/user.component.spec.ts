import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { UserComponent } from './user.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from '../../store';
import { Router } from '@angular/router';
import { TransactionService } from '../../core/services/transaction/transaction.service';
import { DialogService } from '../../core/services/utils/dialog.service';
import { of } from 'rxjs';

@Component({ selector: 'app-header', template: '' })
class HeaderStubComponent {}

@Component({ selector: 'app-profile', template: '' })
class ProfileStubComponent {}

@Component({ selector: 'app-date-filter', template: '' })
class DateFilterStubComponent {}

@Component({ selector: 'app-transaction-feed', template: '' })
class TransactionFeedStubComponent {}

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  let routerStub: Partial<Router>;
  let transactionServiceStub: Partial<TransactionService>;
  let dialogServiceStub: Partial<DialogService>;

  let transactionservice: TransactionService;

  beforeEach(async(() => {
    routerStub = {
      navigate: () => null
    };

    transactionServiceStub = {
      getAll: () => of([]),
      getByDates: () => of([])
    };

    dialogServiceStub = {
      openDialogTransactionDetail: () => null
    };

    TestBed.configureTestingModule({
      declarations: [
        UserComponent,
        HeaderStubComponent,
        ProfileStubComponent,
        DateFilterStubComponent,
        TransactionFeedStubComponent
      ],
      providers: [
        Store,
        { provide: Router, useValue: routerStub },
        { provide: TransactionService, useValue: transactionServiceStub },
        { provide: DialogService, useValue: dialogServiceStub }
      ],
      imports: [StoreModule.forRoot(reducers)],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    transactionservice = TestBed.get(TransactionService);
    component = fixture.componentInstance;
    jest.spyOn(transactionservice, 'getAll').mockClear();
    fixture.detectChanges();
  });

  it('should create', () => {
    jest.spyOn(transactionservice, 'getAll').mockReturnValue(of([]));
    expect(component).toBeTruthy();
  });
});
