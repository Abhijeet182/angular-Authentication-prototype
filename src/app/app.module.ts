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
  providers: [Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
