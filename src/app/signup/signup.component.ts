import { Component, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import {NgForm} from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import {SignupapiService} from '../signupapi.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[SignupapiService]
})
export class SignupComponent implements OnInit {
    api: any[] = null;
    public signupForm:FormGroup;
    public controlsdata:any;
    constructor(
      public SignupService:SignupapiService
    ) {}
  

  ngOnInit() {
    this.signupForm = new FormGroup({
      fname: new FormControl(''),
      lname: new FormControl(''),
      mob: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    
   });
  }
   signup() {
    this.SignupService.getRequest(this.signupForm.value,'')
    .subscribe(data => { 
      console.log(data);
    });

  }

}
