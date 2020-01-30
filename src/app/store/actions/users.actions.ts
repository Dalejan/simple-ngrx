import { Action } from "@ngrx/store";
import { User } from "src/app/models/user.model";

export const LOAD_USERS = "[USERS] Load users";
export const LOAD_USERS_SUCCESS = "[USERS] Load users success";
export const LOAD_USERS_FAIL = "[USERS] Load users fail";

export class LoadUsers implements Action {
  readonly type = LOAD_USERS;
}

export class LoadUsersFail implements Action {
  readonly type = LOAD_USERS_FAIL;
  constructor(public payload: any) {}
}

export class LoadUsersSuccess implements Action {
  readonly type = LOAD_USERS_SUCCESS;
  constructor(public users: User[]) {}
}

export type usersActions = LoadUsers | LoadUsersFail | LoadUsersSuccess;
