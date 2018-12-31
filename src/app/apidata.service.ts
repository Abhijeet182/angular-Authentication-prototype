import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { apidata } from "../app/app.constant";

@Injectable({
  providedIn: 'root'
})
export class ApidataService {

  private actionUrl: string;
  constructor(private _http: HttpClient, private apidata: apidata) {
    this.actionUrl = apidata.serverWithApiUrl;
  }
  getEmployee(){
    return this._http.get(this.actionUrl);
  }
}
