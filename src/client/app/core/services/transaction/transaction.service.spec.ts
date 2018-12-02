import { TestBed, inject, async } from '@angular/core/testing';

import { TransactionService } from './transaction.service';
import { HttpClient } from '@angular/common/http';

describe('TransactionService', () => {
  let httpServiceStub: Partial<HttpClient>;
  let http: HttpClient;
  let service: TransactionService;
  beforeEach(() => {
    httpServiceStub = {
      post: () => null
    };
    TestBed.configureTestingModule({
      providers: [TransactionService, { provide: HttpClient, useValue: httpServiceStub }]
    }).compileComponents();

    http = TestBed.get(HttpClient);
    service = TestBed.get(TransactionService);
  });

  it('should be created', async(() => {
    expect(service).toBeTruthy();
  }));
});
