import { Action } from '@ngrx/store';

export namespace AppActions {
  export enum Type {
    TEST = '[APP] TEST',
    TEST_INIT = '[APP] TEST_INIT',
    TEST_SUCCESS = '[APP] TEST_SUCCESS',
    TEST_FAILED = '[APP] TEST_FAILED'
  }
  export type ClassType = Test | TestInit | TestSuccess | TestFailed;

  export class Test implements Action {
    readonly type = Type.TEST;
    constructor() {}
  }

  export class TestInit implements Action {
    readonly type = Type.TEST_INIT;
    constructor() {}
  }

  export class TestSuccess implements Action {
    readonly type = Type.TEST_SUCCESS;
    constructor(readonly payload: {}) {}
  }

  export class TestFailed implements Action {
    readonly type = Type.TEST_FAILED;
    constructor(readonly payload: Error) {}
  }
}
