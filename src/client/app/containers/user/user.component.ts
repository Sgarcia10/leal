import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthState, AuthActions } from '../../store/auth';
import { selectAuth } from '../../store';
import { select, Store } from '@ngrx/store';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';
import { User } from '../../core/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  authState$: Observable<AuthState>;
  currentUser: User;

  /**
   *Creates an instance of UserComponent.
   * @param {Store<AuthState>} store
   * @memberof UserComponent
   */
  constructor(private store: Store<AuthState>, private router: Router) {
    this.authState$ = this.store.pipe(select(selectAuth));
    this.authState$.subscribe(state => {
      if (state && isNullOrUndefined(state.user)) {
        this.router.navigate(['/login']);
      } else {
        this.currentUser = state.user;
      }
    });
  }

  ngOnInit() {}

  /**
   * Dispatch logout action
   *
   * @memberof UserComponent
   */
  logout() {
    this.store.dispatch(new AuthActions.Logout());
  }
}
