
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'refresh_token' : '1000.365884a88476be0720d11c4931a3c026.ea403257d059d1f6727a715d72da4b9d',
    'client_id' : '1000.NASSTGTS7A3YMCDXB7U7ZG09GKEN3H',
    'client_secret' : '944f75f79aef9568bc25ad6995b9cbe18506a807e2',
    'grant_type' : 'refresh_token',
    'Access-Control-Allow-Origin' : '*'

  })

};

@Injectable({
  providedIn: 'root'
})

export class GlobalService {

  constructor(private http: HttpClient) { }

  public getApiURl() {
    return 'https://www.zohoapis.com/crm/v2/';
  }

  public generate_token(): Observable<any>{
    return this.http.post('https://accounts.zoho.com/oauth/v2/token', httpOptions).pipe(map(data => data as any));
  }



}
