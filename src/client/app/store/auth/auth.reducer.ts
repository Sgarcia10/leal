import { AuthActions } from './auth.actions';
import { defaultAuthState, AuthState } from './auth.state';

export function AuthReducer(state: AuthState, action: AuthActions.ClassType): AuthState {
  switch (action.type) {
    case AuthActions.Type.LOGIN:
      return { ...state, user: null, error: null, authenticating: true };
    case AuthActions.Type.LOGIN_SUCCESS:
      return { ...state, user: action.payload, error: null, authenticating: false };
    case AuthActions.Type.LOGIN_FAILED:
      return { ...state, user: null, error: action.payload, authenticating: false };
    case AuthActions.Type.LOGOUT:
      return defaultAuthState;
    default: {
      return defaultAuthState;
    }
  }
}
