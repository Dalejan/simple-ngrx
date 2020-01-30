import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { User } from "../models/user.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  private URL = "https://reqres.in/api";

  getUsers(): Observable<User[]> {
    return this.http
      .get(`${this.URL}/users`)
      .pipe(map((data: any) => data.data));
  }

  getUserById(id: string): Observable<User> {
    return this.http
      .get(`${this.URL}/users/${id}`)
      .pipe(map((data: any) => data.data));
  }
}
