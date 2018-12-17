import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Configuration } from "../app/app.constant";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private actionUrl: string;
  // private _url: string = "http://localhost:4001/demo/api/v1/user/login"
  constructor(private _http: HttpClient, private Configuration: Configuration) {
    this.actionUrl = Configuration.serverWithApiUrl + 'login';
  }
  getRequest(data: any, options: string) {
    return this._http.post(this.actionUrl, data)
  }
}
