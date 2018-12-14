import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _url: string = "http://localhost:4001/demo/api/v1/user/login"
  constructor(private _http: HttpClient){}
getRequest(data:any,options:string){
  return  this._http.post(this._url,data)
}
}
