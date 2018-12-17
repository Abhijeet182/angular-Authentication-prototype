import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public server = 'http://localhost:4001/';
    public apiUrl = 'demo/api/v1/user/';
    public serverWithApiUrl = this.server + this.apiUrl;
}
export class socialconfig{
    public server = 'http://localhost:4001/';
    public apiUrl = 'demo/api/v1/userlogin/';
    public serverWithApiUrl = this.server + this.apiUrl;
}