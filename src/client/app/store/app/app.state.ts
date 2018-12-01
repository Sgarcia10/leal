export interface AppState {
  msg: {};
  testing: boolean;
  tested: boolean;
  errorTesting: Error | null;
}

export const defaultAppState: AppState = {
  msg: {},
  testing: false,
  tested: false,
  errorTesting: null
};
