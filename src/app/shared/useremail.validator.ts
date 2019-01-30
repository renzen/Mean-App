import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Observable, timer } from 'rxjs';
import { map, switchMap  } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class UserValidators {
  constructor(private http: HttpClient) {}

  private _url = 'http://localhost:3000/api/users';
  //private _url ='https://jsonplaceholder.typicode.com/users';
 // private _url ='http://localhost:5000/users';

  searchUser(email) {
    // debounce
    return timer(1000)
      .pipe(
        switchMap(() => {
          // Check if username is available
          //return this.http.get<any>(`${URL}/users?username=${text}`)
          //return this.http.get<any[]>(`${_allUserUrl}?email=${email}`);
          console.log(`${this._url}?email=${email}`)
          return this.http.get<any[]>(`${this._url}?email=${email}`);
         
        })
      );
  }

  userValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.searchUser(control.value)
        .pipe(
          map(res => {
            // if username is already taken
            if (res.length) {
              // return error
              return { 'userNameExists': true};
            }
          })
        );
    };

  }

}
