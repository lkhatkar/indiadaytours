import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    country: new FormControl('',[Validators.required]),
    enquiry: new FormControl('',[Validators.required]),
  });

  submitted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.contactForm.value);
    this.contactForm.reset();
  }

}
