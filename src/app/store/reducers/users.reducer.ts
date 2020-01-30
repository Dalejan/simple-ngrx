import { User } from "src/app/models/user.model";
import * as fromUsers from "../actions";

export interface UsersState {
  users: User[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initalState: UsersState = {
  users: [],
  loaded: false,
  error: false,
  loading: false
};

export function usersReducer(
  state = initalState,
  action: fromUsers.usersActions
): UsersState {
  switch (action.type) {
    case fromUsers.LOAD_USERS:
      return { ...state, loading: true, error: null };
    case fromUsers.LOAD_USERS_SUCCESS:
      return { ...state, loading: false, users: action.users, loaded: true };
    case fromUsers.LOAD_USERS_FAIL:
      return {
        ...state,
        users: null,
        loading: false,
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
