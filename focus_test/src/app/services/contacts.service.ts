import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Contacts } from '../models/contacts';
import { GlobalService } from './global.service';





@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  token!: string;


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Zoho-oauthtoken ' + this.token
    })

  };



  constructor(private http: HttpClient, private router: Router, private api: GlobalService) {
    this.api.generate_token().subscribe({
      next: (data) => {
        this.token = data;
      }
    })
  }

  saveContact(contact: Contacts) {
    return this.http.post('https://www.zohoapis.com/crm/v2/Contacts', { 'data': [contact] }, { headers: this.httpOptions.headers }).pipe(map(data => data as any[]));
  }


}
