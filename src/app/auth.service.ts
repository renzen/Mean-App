import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  //https://jsonplaceholder.typicode.com/posts


  private _registerUrl = 'http://localhost:3000/api/register';
  private _loginUrl = 'http://localhost:3000/api/login';
  private _allUserUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient,
    private _router: Router) { }

  registerUser(user): Observable<any> {
    var  httpOptions  =  {
      headers:  new  HttpHeaders({
       'Content-Type':  'application/json',
        'accept': 'application/json',
      })
    };
    return this.http.post(this._registerUrl, user, httpOptions)
  }

  // check if email exist
  // getUserByEmail(email: string) {
  //   return this.http.get<any[]>(`${this._allUserUrl}?email=${email}`);
  // }



  loginUser(email: string, password: string) {
    return this.http.post<any>(this._loginUrl, { email: email, password: password })
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }

}

