import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { RouterModule } from '@angular/router';
import { logging } from 'protractor';
import { HomeComponent } from './home_landingpage/home.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Configuration } from './app.constant';
import { socialconfig } from "../app/app.constant";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    HomeComponent,
    SignupComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: UserloginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ])
  ],
  providers: [Configuration, socialconfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
