import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Configuration } from "../app/app.constant";

@Injectable({
  providedIn: 'root'
})
export class SignupapiService {
  private actionUrl: string;
  constructor(private _http: HttpClient, private Configuration: Configuration) {
    this.actionUrl = Configuration.serverWithApiUrl + 'signup';
  }
  getRequest(data: any, options: string) {
    return this._http.post(this.actionUrl, data)
  }
}
