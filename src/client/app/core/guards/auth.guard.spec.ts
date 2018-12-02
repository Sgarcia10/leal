import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from '../../store';
import { Router } from '@angular/router';

describe('AuthGuard', () => {
  let routerStub: Partial<Router>;

  beforeEach(() => {
    routerStub = {
      navigate: () => null
    };
    TestBed.configureTestingModule({
      providers: [AuthGuard, { provide: Router, useValue: routerStub }, Store],
      imports: [StoreModule.forRoot(reducers)]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
