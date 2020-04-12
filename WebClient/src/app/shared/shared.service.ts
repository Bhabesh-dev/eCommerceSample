import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class SharedService {
  private baseURL: string = "/api/register";

  private loginStatus = new BehaviorSubject<Boolean>(this.checkLoginStatus());

  constructor(private http: HttpClient, private router: Router) {}

  register(
    userName: string,
    password: string,
    email: string,
    fullName: string
  ) {
    return this.http
      .post<any>(this.baseURL, { userName, password, email, fullName })
      .pipe(
        map(
          (result) => {
            return result;
          },
          (error) => {
            return error;
          }
        )
      );
  }

  checkLoginStatus() {
    return false;
  }
}
