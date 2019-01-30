import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {RequestOptions, Request, Headers } from '@angular/http';


@Injectable()
export class WeatherService {

  //private _weatherServiceUrl = "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=4ba553b671109d965d40fc6bc6d9aee1";

  //http://api.openweathermap.org/data/2.5/weather?q=athens&appid={b6907d289e10d714a6e88b30761fae22}

  private _weatherServiceUrl = 'http://localhost:3000/api/openweathermap';

  constructor(private _http: HttpClient) { }

  requestOptions = new RequestOptions({ headers:null, withCredentials: true });

dailyForecast(): Observable<any> {
  var httpOptions = {
    headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'application/json',
    'accept': 'application/json',
    //'Authorization' : ' Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiNWMzNDY2MTY0OTIzYjM3MGQ4NDVjNGYxIiwiaWF0IjoxNTQ3MjA2ODM0fQ._am57em5BF8HAn1F2K-_BbgQPXtpW3gRf8W2q6Xi8RE'
    })
     }; 
     console.log(this._weatherServiceUrl)
    return this._http.get(this._weatherServiceUrl, httpOptions)
    .pipe(map(result => result));
}

  


}