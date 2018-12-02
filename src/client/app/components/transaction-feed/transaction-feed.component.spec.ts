import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionFeedComponent } from './transaction-feed.component';
import { SharedModule } from '../../shared/shared.module';

describe('TransactionFeedComponent', () => {
  let component: TransactionFeedComponent;
  let fixture: ComponentFixture<TransactionFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionFeedComponent],
      imports: [SharedModule]
    }).compileComponents();
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
