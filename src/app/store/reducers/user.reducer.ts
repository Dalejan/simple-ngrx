import { User } from "src/app/models/user.model";
import * as fromUser from "../actions";

export interface UserState {
  user: User;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initalState: UserState = {
  user: null,
  loaded: false,
  error: false,
  loading: false
};

export function userReducer(
  state = initalState,
  action: fromUser.userActions
): UserState {
  switch (action.type) {
    case fromUser.LOAD_USER:
      return { ...state, loading: true, error: null };
    case fromUser.LOAD_USER_SUCCESS:
      return { ...state, loading: false, user: action.user, loaded: true };
    case fromUser.LOAD_USER_FAIL:
      return {
        ...state,
        loading: false,
        user: null,
        error: {
          status: action.payload.status,
          url: action.payload.url,
          name: action.payload.name
        },
        loaded: true
      };
    default:
      return state;
  }
}
