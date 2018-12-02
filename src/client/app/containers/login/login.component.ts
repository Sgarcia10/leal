import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDTO } from '../../core/models/loginDTO';
import { AuthState, AuthActions } from '../../store/auth';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { selectAuth } from '../../store';
import { isNullOrUndefined } from 'util';
import { MatSnackBar } from '@angular/material';
import { delay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  authState$: Observable<AuthState>;

  /**
   *Creates an instance of LoginComponent.
   * @param {Store<AuthState>} store
   * @param {Router} router
   * @param {MatSnackBar} snackBar
   * @memberof LoginComponent
   */
  constructor(
    private store: Store<AuthState>,
    private router: Router,
    public snackBar: MatSnackBar
  ) {
    this.authState$ = this.store.pipe(select(selectAuth));
    this.authState$.subscribe(state => {
      if (state && !isNullOrUndefined(state.error)) {
        this.snackBar.open(state.error.message, undefined, {
          duration: 3000
        });
      } else if (state && !isNullOrUndefined(state.user)) {
        this.router.navigate(['/user']);
      }
    });
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  /**
   * Dispatch login action
   *
   * @memberof LoginComponent
   */
  login() {
    if (this.loginForm.valid) {
      const loginDTO = {
        email: this.emailFormControl.value,
        password: this.passwordFormControl.value
      };
      this.store.dispatch(new AuthActions.Login(loginDTO));
    }
  }

  /**
   *Get Email Form Control
   *
   * @readonly
   * @memberof LoginComponent
   */
  get emailFormControl() {
    return this.loginForm.get('email');
  }

  /**
   *Get Password Form Control
   *
   * @readonly
   * @memberof LoginComponent
   */
  get passwordFormControl() {
    return this.loginForm.get('password');
  }
}
