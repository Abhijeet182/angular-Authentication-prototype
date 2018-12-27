import { Component, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from "@angular/router";
import { GauthService } from "../gauth.service";
import swal from "sweetalert";
import { ToastrService } from 'ngx-toastr';


@Component({

  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css'],
  providers: [ApiService, GauthService]
})
export class UserloginComponent implements OnInit {
  api: any[] = null;
  public profileForm: FormGroup;
  public controlsdata: any;
  public dataSource: any;
  submitted = false;
  constructor(
    public ApiService: ApiService,
    private router: Router,
    public GauthService: GauthService,
    private toastr: ToastrService
  ) { }
  get f() { return this.profileForm.controls; }

  
  ngOnInit() {
    this.profileForm = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[A-Z0-9a-z_.]{3,}@[A-Z0-9a-z]{3,}[.]{1}[A-Za-z.]{2,6}$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})')
      ]))
    });
  }
  google() {
    this.GauthService.getRequest()
      .subscribe(data => {
        console.log(JSON.stringify(data));
      }, (error) => {
        console.log(error);
      })
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
          if (this.dataSource.statusCode == 1) {
            localStorage.setItem('fname', this.dataSource.responseData.params.fname);
            localStorage.setItem('lname', this.dataSource.responseData.params.lname);
            localStorage.setItem('email', this.dataSource.responseData.params.email);
            this.router.navigateByUrl('/dashboard');
          }
          else
          {
            this.toastr.error('Invaild Credentials!');
            swal("Oops!", "Email not exist in our database!!", "error");
          }
        });
    }
  }
}
