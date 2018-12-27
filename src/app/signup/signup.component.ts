import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { SignupapiService } from '../signupapi.service';
import { Router } from "@angular/router";
import swal from "sweetalert";


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
  public user: any;
  submitted = false;
  constructor(
    public SignupService: SignupapiService,
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
        Validators.pattern('^[A-Z0-9a-z._]{3,}@[A-Z0-9a-z]{3,}[.]{1}[A-Za-z.]{2,6}$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})'),
        Validators.minLength(4)
      ])),
      confirmPassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})'),
        Validators.minLength(4)
      ]))
    });
  }

  checkPass(type: string) {
    if (this.signupForm.value.password && this.signupForm.value.confirmPassword) {
      if (this.signupForm.value.password !== this.signupForm.value.confirmPassword) {
        swal("Password did'nt match!!");
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
            this.dataSource = data;
            if (this.dataSource.statusCode == 1) {
              swal("Congratulations!", "You are successfully register with us!", "success")
              this.router.navigateByUrl('/login');
            }
            else
              swal("Registration failed!");
          });
      }
    }
  }
}
