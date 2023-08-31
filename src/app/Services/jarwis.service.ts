import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerUrl } from '../server-url.model';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {

  private serverDetails = new ServerUrl;
  header:any;

  constructor(private http:HttpClient,private headers:TokenService) { 
    this.header=headers.getHeaders();
  }

  signUp(data:any){

    return this.http.post('http://127.0.0.1:8000/api/signup', data,{headers:this.header})
  }

  login(data:any){
    return this.http.post('http://127.0.0.1:8000/api/login', data,{headers:this.header})
  }



}
