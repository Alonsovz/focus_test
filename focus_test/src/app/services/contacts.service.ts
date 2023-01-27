import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Contacts } from '../models/contacts';
import { GlobalService } from './global.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Authorization'
  })

};

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  
  constructor(private http: HttpClient, private router: Router, private api: GlobalService) { }


}
