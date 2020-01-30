import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.reducer";
import { LoadUser } from "src/app/store/actions";
import { Subject, Observable } from "rxjs";
import { takeUntil, map } from "rxjs/operators";
import { User } from "src/app/models/user.model";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.scss"]
})
export class UserDetailComponent implements OnInit, OnDestroy {
  public id: string;
  private unsubscribe$ = new Subject<void>();
  public user$: Observable<User>;
  public loading$: Observable<boolean>;
  public error$: {};

  constructor(public route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit() {
    this.route.params.pipe(takeUntil(this.unsubscribe$)).subscribe(params => {
      this.id = params.id;
      this.store.dispatch(new LoadUser(this.id));
    });

    this.user$ = this.store.select("user").pipe(map(user => user.user));
    this.error$ = this.store.select("user").pipe(map(users => users.error));
    this.loading$ = this.store.select("user").pipe(map(users => users.loading));
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
