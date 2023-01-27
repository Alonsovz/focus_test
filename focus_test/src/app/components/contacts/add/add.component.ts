import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contacts } from 'src/app/models/contacts';
import { ContactsService } from 'src/app/services/contacts.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  add_contact_form: FormGroup;

  constructor(private api_service: GlobalService, private _contactService: ContactsService) {
    this.add_contact_form = new FormGroup({
      'first_name': new FormControl('', [Validators.required]),
      'Last_Name': new FormControl('', [Validators.required]),
      'email': new FormControl(''),
      'invoice_rate': new FormControl(''),

    });
  }

  ngOnInit(): void {
    //this.get_token();
  }


  reset_form() {
    this.add_contact_form.reset();
  }

  save() {
    let contact: Contacts = new Contacts();
    contact = this.add_contact_form.value;
    console.clear()
    console.log(contact);
    this._contactService.saveContact(contact).subscribe({
      next: (data) => { },
      complete: () => {

      },
      error: (err) => {
        console.clear();
        console.log(err);
      }
    })
  }


  get_token() {
    this.api_service.generate_token().subscribe(
      {
        next: (data) => { },
        complete: () => { },
        error: (err) => {
          console.clear();
          console.log(err);
        }
      }
    );

  }




}
