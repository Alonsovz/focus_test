import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  add_contact_form: FormGroup;
  
  constructor(private api_service: GlobalService) {
    this.add_contact_form  = new FormGroup({
      'first_name': new FormControl('',[Validators.required]),
      'last_name': new FormControl('',[Validators.required]),
      'email' : new FormControl(''),
      'invoice_rate' : new FormControl(''),

    });
   }

  ngOnInit(): void {
    this.get_token();
  }


  reset_form(){
    this.add_contact_form.reset();
  }


  get_token(){
    this.api_service.generate_token().subscribe(
      data => {
        console.log(data);
      },
      err=>{

      },
      ()=>{

      });

  }




}
