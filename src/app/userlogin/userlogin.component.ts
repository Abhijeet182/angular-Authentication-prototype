import { Component, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

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
  constructor(
    public ApiService: ApiService
  ) { }

  ngOnInit() {

    this.profileForm = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
      ]))

    });

  }

  login() {
    this.ApiService.getRequest(this.profileForm.value, '')
      .subscribe(data => {
        console.log(data);
        this.dataSource = data;
        if (this.dataSource.statusCode == 1)
          alert('Login Success, Welcome \n' + JSON.stringify(this.profileForm.value.email))
        else
          alert("Login Failed");
      });
  }
}
