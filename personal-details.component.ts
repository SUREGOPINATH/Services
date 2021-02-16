import { Component, OnInit } from '@angular/core';
import {NgModel, ReactiveFormsModule} from '@angular/forms';
import {FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  states:string[]=['ap','up','mp','TN','Ts'];
	ContactForm=new FormGroup({
		firstname:new FormControl('',[Validators.required,Validators.minLength(10)]),
		lastname:new FormControl('sabhir',null,null),
    // country:new FormControl('india',[Validators.required]),
		email: new FormControl({value:'abdulsabhir@gmail.com',disabled:true}),
    state: new FormControl()
		});

  
  onsubmit() {
		console.log(this.ContactForm.value);
	}
}
