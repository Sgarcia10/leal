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
import { AuthState, AuthActions } from '../../store/auth';
import { getUserMock } from '../../core/models/__mocks__/user.mock';
import { getTransactionMock } from '../../core/models/__mocks__/transaction.mock';
import { Transaction } from '../../core/models/transaction';

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
  let store: Store<AuthState>;

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
    store = TestBed.get(Store);
    component = fixture.componentInstance;
    spyOn(store, 'dispatch').and.callThrough();
    jest.spyOn(transactionservice, 'getAll').mockClear();
    fixture.detectChanges();
  });

  it('should create', () => {
    jest.spyOn(transactionservice, 'getAll').mockReturnValue(of([]));
    expect(component).toBeTruthy();
  });

  it('should logout user', () => {
    let state: AuthState;
    expect(state).toBeUndefined();
    component.authState$.subscribe(data => {
      state = data;
    });
    store.dispatch(new AuthActions.Logout());
    expect(state.user).toBeNull();
    expect(component.currentUser).toBeNull();
    store.dispatch(new AuthActions.LoginSuccess(getUserMock({ firstName: 'carlos' })));
    expect(state.user.firstName).toBe('carlos');
    store.dispatch(new AuthActions.Logout());
    expect(state.user).toBeNull();
  });

  it('should login user', () => {
    let state: AuthState;
    expect(state).toBeUndefined();
    component.authState$.subscribe(data => {
      state = data;
    });
    expect(state.user).toBeNull();
    store.dispatch(new AuthActions.LoginSuccess(getUserMock({ firstName: 'carlos' })));
    expect(state.user.firstName).toBe('carlos');
    expect(component.currentUser.firstName).toBe('carlos');
  });

  it('should get full name', () => {
    const user = getUserMock({ firstName: 'carlos', lastName: 'gonzales' });
    let state: AuthState;
    expect(state).toBeUndefined();
    component.authState$.subscribe(data => {
      state = data;
    });
    expect(state.user).toBeNull();
    store.dispatch(new AuthActions.LoginSuccess(user));
    expect(component.fullName).toBe('carlos gonzales');
  });

  it('should get email', () => {
    const user = getUserMock({ email: 'carltronik@gmail' });
    let state: AuthState;
    expect(state).toBeUndefined();
    component.authState$.subscribe(data => {
      state = data;
    });
    expect(state.user).toBeNull();
    store.dispatch(new AuthActions.LoginSuccess(user));
    expect(component.email).toBe('carltronik@gmail');
  });

  it('should set transaction feed on init', () => {
    const transactions: Transaction[] = Array.apply(null, Array(5)).map(function() {});
    transactions.forEach((element, i) => {
      transactions[i] = getTransactionMock({ _id: `${i}` });
    });
    jest.spyOn(transactionservice, 'getAll').mockReturnValue(of(transactions));
    component.ngOnInit();
    expect(component.transactions).toHaveLength(5);
    component.transactions.forEach((element, i) => {
      expect(element._id).toBe(`${i}`);
    });
  });
});
