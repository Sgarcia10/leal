import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/';
import { AppService } from '../../core/app.service';

import { AppActions } from './app.actions';

@Injectable()
export class AppEffects {
  constructor(private actions: Actions, private service: AppService) {}

  @Effect()
  test = this.actions.ofType(AppActions.Type.TEST).pipe(
    switchMap(() =>
      this.service.test().pipe(
        map(res => new AppActions.TestSuccess(res)),
        catchError(err => of(new AppActions.TestFailed(err)))
      )
    )
  );
}
