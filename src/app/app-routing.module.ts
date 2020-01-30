import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersListComponent } from "./users/users-list/users-list.component";
import { UserDetailComponent } from "./users/user-detail/user-detail.component";

const routes: Routes = [
  {
    path: "home",
    component: UsersListComponent
  },
  {
    path: "user/:id",
    component: UserDetailComponent
  },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
