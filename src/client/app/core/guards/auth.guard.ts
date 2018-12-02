import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthState } from '../../store/auth';
import { Store, select } from '@ngrx/store';
import { selectAuth } from '../../store';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  authState$: Observable<AuthState>;
  isLogged: boolean;

  /**
   *Creates an instance of LoginComponent.
   * @param {AuthService} authService
   * @param {Router} router
   * @memberof LoginComponent
   */
  constructor(private store: Store<AuthState>, private router: Router) {
    this.isLogged = false;
    this.authState$ = this.store.pipe(select(selectAuth));
    this.authState$.subscribe(state => {
      if (state && !isNullOrUndefined(state.user)) {
        this.isLogged = true;
      }
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin();
  }

  checkLogin(): boolean {
    if (this.isLogged) {
      return true;
    }

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
}
