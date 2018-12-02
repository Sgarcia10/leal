import { Action } from '@ngrx/store';
import { User } from '../../core/models/user';
import { ErrorLogin } from '../../core/models/errorLogin';
import { LoginDTO } from '../../core/models/loginDTO';
import { CustomAction } from '../../core/models/custom-action';

export namespace AuthActions {
  export enum Type {
    LOGIN = '[AUTH] LOGIN',
    LOGIN_SUCCESS = '[AUTH] LOGIN_SUCCESS',
    LOGIN_FAILED = '[AUTH] LOGIN_FAILED',
    LOGOUT = '[AUTH] LOGOUT'
  }
  export type ClassType = Login | LoginSuccess | LoginFailed | Logout;

  export class Login implements CustomAction {
    readonly type = Type.LOGIN;
    constructor(readonly payload: LoginDTO) {}
  }

  export class LoginSuccess implements CustomAction {
    readonly type = Type.LOGIN_SUCCESS;
    constructor(readonly payload: User) {}
  }

  export class LoginFailed implements CustomAction {
    readonly type = Type.LOGIN_FAILED;
    constructor(readonly payload: ErrorLogin) {}
  }

  export class Logout implements CustomAction {
    readonly type = Type.LOGOUT;
    constructor() {}
  }
}
