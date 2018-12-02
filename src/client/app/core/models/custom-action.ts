import { Action } from '@ngrx/store';

export interface CustomAction<T = {}> extends Action {
  readonly payload?: T;
}
