import { Injectable } from "@angular/core";
import { Actions, Effect, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";

import * as userActions from "../actions";
import { UserService } from "src/app/services/user.service";
import { of } from "rxjs";

@Injectable()
export class UserEffects {
  @Effect({ dispatch: false })
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.LOAD_USER),
      switchMap(action =>
        this.userervice.getUserById(action["id"]).pipe(
          map(user => new userActions.LoadUserSuccess(user)),
          catchError(error => of(new userActions.LoadUserFail(error)))
        )
      )
    )
  );

  constructor(private actions$: Actions, private userervice: UserService) {}
}
