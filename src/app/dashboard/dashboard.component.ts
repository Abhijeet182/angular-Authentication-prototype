import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  fname: any
  lname: any
  cuser: any
  constructor(private router: Router) {
    this.fname = localStorage.getItem('fname');


    if (this.fname == 'null') {
      this.router.navigateByUrl('/login');
    } else {
      this.fname = localStorage.getItem('fname');
      this.lname = localStorage.getItem('lname');
    }
  }
  logout() {
    localStorage.setItem('fname', null);
    localStorage.setItem('lname', null);
  }

  ngOnInit() {
    try {
      this.cuser = this.fname;
      if (this.cuser) {
        alert(`welcome ${this.cuser}`);
      } else {
        this.unauthUser();
      }
    } catch (ex) {
      this.unauthUser();
    }
  }
  unauthUser() {
    alert("You have not valid access, please login to continue");
    this.router.navigate(['/login']);
  }
}


