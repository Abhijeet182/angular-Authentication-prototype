import { Component, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from "@angular/router";

@Component({

  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css'],
  providers: [ApiService]
})
export class UserloginComponent implements OnInit {
  api: any[] = null;
  public profileForm: FormGroup;
  public controlsdata: any;
  public dataSource: any;
  submitted = false;
  constructor(
    public ApiService: ApiService,
    private router: Router
  ) { }
  get f() { return this.profileForm.controls; }

  ngOnInit() {

    this.profileForm = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})')
      ]))

    });

  }

  login() {
    this.submitted = true;
    if (this.profileForm.invalid) {
      console.log('Login invalid');
      return;
    }
    else {
      this.ApiService.getRequest(this.profileForm.value, '')
        .subscribe(data => {
          console.log(data);
          this.dataSource = data;
          if (this.dataSource.statusCode == 1)
            this.router.navigateByUrl('/dashboard');
          else
            alert("Login Failed");
        });
    }
  }

}
