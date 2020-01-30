import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user.model";
import { UserService } from "src/app/services/user.service";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.reducer";
import * as userActions from "../../store/actions";
import { map } from "rxjs/operators";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"]
})
export class UsersListComponent implements OnInit {
  users: Observable<User[]>;
  error: {};
  loading: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new userActions.LoadUsers());
    this.users = this.store.select("users").pipe(map(users => users.users));
    this.error = this.store.select("users").pipe(map(users => users.error));
    this.loading = this.store.select("users").pipe(map(users => users.loading));
  }
}
