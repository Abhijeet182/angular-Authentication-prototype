import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { RouterModule } from '@angular/router';
import { logging } from 'protractor';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    HomeComponent,
    SignupComponent
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
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
