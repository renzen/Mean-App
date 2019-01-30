import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  // http://localhost:3000/api/register
  private _eventsUrl = 'http://localhost:3000/api/events';
  private _specialEventsUrl = 'http://localhost:3000/api/special';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getEvents() {
    // var httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json',
    //   'accept': 'application/json',
    //   'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiNWMzNDY2MTY0OTIzYjM3MGQ4NDVjNGYxIiwiaWF0IjoxNTQ3MjA2ODM0fQ._am57em5BF8HAn1F2K-_BbgQPXtpW3gRf8W2q6Xi8RE'
    //   })
    //    }; 
    return this.http.get<any>(this._eventsUrl).pipe(tap(_ => this.log(`Get add ons = ${this._eventsUrl}`)),
    catchError(this.handleError<any>('GetEvents')));
  }

  getSpecialEvents() {
   
    // var httpOptions = {
    //   headers: new HttpHeaders({ 
    //   'Content-Type': 'application/json',
    //   'accept': 'application/json',
    //   'Authorization' : ' Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiNWMzNDY2MTY0OTIzYjM3MGQ4NDVjNGYxIiwiaWF0IjoxNTQ3MjA2ODM0fQ._am57em5BF8HAn1F2K-_BbgQPXtpW3gRf8W2q6Xi8RE'
    //   })
    //    }; 
    return this.http.get<any>(this._specialEventsUrl).pipe(tap(_ => this.log(`Get add ons = ${this._specialEventsUrl}`)),
    catchError(this.handleError<any>('GetSpecialEvents')));
  }


//Success handler
private extractData(response: Response){
  if(response.status < 200 || response.status >= 300){
  throw new Error(`Bad response status: ${response.status}`);
  }
  return response.json();
  }
  
  
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('Data Service: ' + message);
  }
  
  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);
    // Let the app keep running by returning an empty result.
    return of(result as T);
    };


}
  

}
