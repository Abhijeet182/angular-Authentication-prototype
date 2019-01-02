import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()
export class DataServiceService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  _baseUrl: string = '';

  constructor(private HttpClient: HttpClient) {
    console.log("data service");
    this._baseUrl = "https://jsonplaceholder.typicode.com/";
  }

   public getAllTodos() {
    return this.HttpClient.get(this._baseUrl + 'todos') 
  }
  
   handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }
}
