import { Component, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { NgForm, AbstractControl } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { SignupapiService } from '../signupapi.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [SignupapiService]
})
export class SignupComponent implements OnInit {
  api: any[] = null;
  public signupForm: FormGroup;
  public controlsdata: any;
  public dataSource: any;
  public p1: any;
  public p2: any;
  public user: any;
  submitted = false;
  constructor(
    public SignupService: SignupapiService,
    private fb: FormBuilder,
    private router: Router
  ) { }
  get f() { return this.signupForm.controls; }

  ngOnInit() {
    this.signupForm = new FormGroup({
      fname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-z]{1,10}'),
        Validators.minLength(4)
      ])),
      lname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-z]{1,10}'),
        Validators.minLength(4)
      ])),
      mob: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(10),
        Validators.maxLength(10)
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('(([a-zA-Z0-9\-?\.?]+)@(([a-zA-Z0-9\-_]+\.)+)([a-zA-Z]{2,4}))+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})'),
        Validators.minLength(4)
      ])),
      confirmPassword: new FormControl('')
    });
  }

  checkPass(type: string) {
    if (this.signupForm.value.password && this.signupForm.value.confirmPassword) {
      if (this.signupForm.value.password !== this.signupForm.value.confirmPassword) {
        alert("password not match");
        return false;
      }
      return true;
    }
    return false;
  }

  signup() {
    this.submitted = true;
    if (this.signupForm.invalid) {
      console.log('form invalid');
      return;
    }
    else {
      if (this.checkPass('')) {
        this.SignupService.getRequest(this.signupForm.value, '')
          .subscribe(data => {
            console.log(data);
            this.dataSource = data;
            if (this.dataSource.statusCode == 1) {
              alert('Successful register with us, login with \n' + JSON.stringify(this.signupForm.value.email))
              this.router.navigateByUrl('/login');
            }
            else
              alert("Registration Failed");
          });
      }
    }


  }

}
