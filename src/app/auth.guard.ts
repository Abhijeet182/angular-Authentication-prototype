import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public dataSource: any;
  constructor(private router: Router, private toastr: ToastrService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    this.dataSource = localStorage.getItem('fname');
    if (this.dataSource) {
      swal(`welcome ${this.dataSource}`);
      this.toastr.success(`welcome ${this.dataSource}`);
      return true;
    }
    else {
      this.router.navigate(['/login']);
      this.toastr.error('You have to login first');
      return false;
    }
  }
}
