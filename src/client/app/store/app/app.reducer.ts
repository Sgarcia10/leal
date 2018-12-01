import { AppActions } from './app.actions';
import { defaultAppState, AppState } from './app.state';

export function AppReducer(state: AppState, action: AppActions.ClassType): AppState {
  switch (action.type) {
    case AppActions.Type.TEST_INIT:
      return { ...state, msg: {}, testing: false, tested: false, errorTesting: null };
    case AppActions.Type.TEST:
      return { ...state, testing: true, tested: false, errorTesting: null };
    case AppActions.Type.TEST_SUCCESS:
      return {
        ...state,
        msg: action.payload,
        testing: false,
        tested: true,
        errorTesting: null
      };
    case AppActions.Type.TEST_FAILED:
      return { ...state, testing: false, tested: false, errorTesting: action.payload };
    default: {
      return defaultAppState;
    }
  }
}
