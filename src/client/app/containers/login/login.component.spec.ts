import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { StoreModule, Store } from '@ngrx/store';
import { reducers } from '../../store';
import { Router } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let routerStub: Partial<Router>;

  beforeEach(async(() => {
    routerStub = {
      navigate: () => null
    };
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [Store, { provide: Router, useValue: routerStub }],
      imports: [StoreModule.forRoot(reducers), SharedModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
