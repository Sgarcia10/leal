import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionFeedComponent } from './transaction-feed.component';

describe('TransactionFeedComponent', () => {
  let component: TransactionFeedComponent;
  let fixture: ComponentFixture<TransactionFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
