import { environment } from '../../environments/environment';
import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector
} from '@ngrx/store';

import { AppState, AppReducer } from './app';

export interface AppAction {
  appState: AppState;
}

export const reducers: ActionReducerMap<AppAction> = {
  appState: AppReducer
};

export function actionsLogger(reducer: ActionReducer<AppAction>) {
  return function(state, action) {
    const type = `Action ${action.type}`;
    console.groupCollapsed(type);
    if (action.payload) {
      console.log('Action payload', action.payload);
    }
    console.log('Previous state', state);
    const nextState = reducer(state, action);
    console.log('Next state', nextState);
    console.groupEnd();
    return nextState;
  };
}

export const metaReducers: MetaReducer<AppAction>[] = [];
if (!environment.production) {
  metaReducers.push(actionsLogger);
}

export const selectApp = createFeatureSelector<AppState>('appState');
