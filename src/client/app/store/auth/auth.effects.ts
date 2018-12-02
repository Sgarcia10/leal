import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/';
import { AuthActions } from './auth.actions';
import { AuthService } from '../../core/services/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AuthEffects {
  constructor(private actions: Actions, private service: AuthService) {}

  @Effect()
  login = this.actions.pipe(
    ofType<AuthActions.Login>(AuthActions.Type.LOGIN),
    switchMap(auth =>
      this.service.login(auth.payload).pipe(
        map(res => new AuthActions.LoginSuccess(res)),
        catchError((err: HttpErrorResponse) => of(new AuthActions.LoginFailed(err.error)))
      )
    )
  );

  @Effect({ dispatch: false })
  logout = this.actions.pipe(
    ofType<AuthActions.Logout>(AuthActions.Type.LOGOUT),
    tap(auth => this.service.logout())
  );
}
