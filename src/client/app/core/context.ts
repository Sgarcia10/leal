import { InjectionToken } from '@angular/core';

export const APP_CONTEXT_TOKEN = new InjectionToken('app-context');
export const AppContext = (window as any)._app_context;
