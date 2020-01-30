import { Action } from "@ngrx/store";
import { User } from "src/app/models/user.model";

export const LOAD_USER = "[USER] Load user";
export const LOAD_USER_SUCCESS = "[USER] Load user success";
export const LOAD_USER_FAIL = "[USER] Load user fail";

export class LoadUser implements Action {
  readonly type = LOAD_USER;
  constructor(public id: string) {}
}

export class LoadUserFail implements Action {
  readonly type = LOAD_USER_FAIL;
  constructor(public payload: any) {}
}

export class LoadUserSuccess implements Action {
  readonly type = LOAD_USER_SUCCESS;
  constructor(public user: User) {}
}

export type userActions = LoadUser | LoadUserFail | LoadUserSuccess;
