import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { User } from '../common/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = "http://localhost:8080/users/";

  constructor(private http: HttpClient) { }


  getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(this.userUrl + "email=" + email);
  }



}
