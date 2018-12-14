import { Component, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import {NgForm} from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import {ApiService} from '../api.service';

@Component({

  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css'],
  providers:[ApiService]
})
export class UserloginComponent implements OnInit {
  api: any[] = null;
  public profileForm:FormGroup;
  public controlsdata:any;
  constructor(
    public ApiService:ApiService
  ) {}

  ngOnInit() {
    
   this.profileForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    
   });
  
  }
 
 login() {
  this.ApiService.getRequest(this.profileForm.value,'')
  .subscribe(data => { 
    console.log(data);
  });
}
}
