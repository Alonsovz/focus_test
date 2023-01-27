import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Contacts } from '../models/contacts';
import { GlobalService } from './global.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Zoho-oauthtoken 1000.bb79726920428665c774a985ef669e2e.7d48433f91b86e7ad5de0a063281b41f'
  })

};

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient, private router: Router, private api: GlobalService) { }

  saveContact(contact: Contacts) {
    return this.http.post('https://www.zohoapis.com/crm/v2/Contacts', { 'data': [contact] }, { headers: httpOptions.headers }).pipe(map(data => data as any[]));
  }


}
