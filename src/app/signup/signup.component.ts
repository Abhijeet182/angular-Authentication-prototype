import { Component, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import {NgForm} from '@angular/forms';
import { FormGroup, FormControl,Validators } from '@angular/forms';
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
    public dataSource:any;
    submitted = false;
    constructor(
      public SignupService:SignupapiService
    ) {}
    get f() { return this.signupForm.controls; }

  ngOnInit() {
    this.signupForm = new FormGroup({
      fname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+'),
        Validators.minLength(4)
      ])),
      lname: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+'),
        Validators.minLength(4)
      ])),
      mob: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]+'),
        Validators.minLength(10)
      ])),
      email: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ])),
      password: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),
        Validators.minLength(4)
      ])),
      cpassword: new FormControl('')
   });
  }
   signup() {
     this.submitted = true;
    this.SignupService.getRequest(this.signupForm.value,'')
    .subscribe(data => { 
      console.log(data);
      this.dataSource = data;
        if(this.dataSource.statusCode ==1)
         alert('Successful register with us, login with \n' + JSON.stringify(this.signupForm.value.email))
        else
           alert("Login Failed");
    });

  }

}
