import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
fname:any
lname:any
  constructor(private router: Router) { 

    this.fname = localStorage.getItem('fname');

if (this.fname == 'null') {
  this.router.navigateByUrl('/login');
} else {
  this.fname = localStorage.getItem('fname');
  this.lname = localStorage.getItem('lname');
  console.log(this.fname ,"dashboard ");
  console.log(this.lname ,"dashboard ");
}
  }
  logout(){
    localStorage.setItem('fname',null);
    localStorage.setItem('lname',null);
  }

  ngOnInit() {

  }

}
