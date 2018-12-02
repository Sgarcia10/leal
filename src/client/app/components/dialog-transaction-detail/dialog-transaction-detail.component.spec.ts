import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTransactionDetailComponent } from './dialog-transaction-detail.component';

describe('DialogTransactionDetailComponent', () => {
  let component: DialogTransactionDetailComponent;
  let fixture: ComponentFixture<DialogTransactionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogTransactionDetailComponent ]
    })
    .compileComponents();
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
