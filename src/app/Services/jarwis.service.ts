import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerUrl } from '../server-url.model';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {

  private serverDetails = new ServerUrl;

  constructor(private http:HttpClient) { }

  signUp(data:any){

    return this.http.post('http://127.0.0.1:8000/api/signup', data)
  }

  login(data:any){
    return this.http.post('http://127.0.0.1:8000/api/login', data)
  }



}
