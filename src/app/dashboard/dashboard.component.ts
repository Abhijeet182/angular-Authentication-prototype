import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  fname: any
  lname: any
  email: any
  cuser: any
  constructor(private router: Router, private toastr: ToastrService) {
    // this.fname = localStorage.getItem('fname');


    // if (this.fname == 'null') {
    //   this.router.navigateByUrl('/login');
    // } else {
    //   this.fname = localStorage.getItem('fname');
    //   this.lname = localStorage.getItem('lname');
    //   this.email = localStorage.getItem('email');
    // }
  }
  // logout() {
  //   localStorage.setItem('fname', null);
  //   localStorage.setItem('lname', null);
  //   localStorage.setItem('email', null);
  // }

  ngOnInit() {
    // try {
    //   this.cuser = this.fname;
    //   if (this.cuser) {
    //     swal(`welcome ${this.cuser}`);
    //     this.toastr.success(`welcome ${this.email}`);
    //   } else {
    //     this.unauthUser();
    //     this.toastr.error('You have not valid access, please login to continue');
    //   }
    // } catch (ex) {
    //   this.unauthUser();
    //   this.toastr.error('You have not valid access, please login to continue');
    // }
  }
  // unauthUser() {
  //   this.toastr.error('You have not valid access, please login to continue');
  //   this.router.navigate(['/login']);
  // }
}


