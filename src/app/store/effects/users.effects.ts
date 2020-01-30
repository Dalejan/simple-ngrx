import { Injectable } from "@angular/core";
import { Actions, Effect, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";

import * as usersActions from "../actions";
import { UserService } from "src/app/services/user.service";
import { of } from "rxjs";

@Injectable()
export class UsersEffects {
  @Effect()
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.LOAD_USERS),
      switchMap(() =>
        this.userService.getUsers().pipe(
          map(users => new usersActions.LoadUsersSuccess(users)),
          catchError(error => of(new usersActions.LoadUsersFail(error)))
        )
      )
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
