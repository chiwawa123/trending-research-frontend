import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerUrl } from '../server-url.model';
import { TokenService } from './token.service';
import { ServerDetails } from '../server-details';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {

  header:any;

  constructor(private http:HttpClient,private headers:TokenService) { 
    this.header=headers.getHeaders();
  }

  signUp(data:any){

    return this.http.post(ServerDetails.serverIP + '/signup', data,{headers:this.header})
  }

  login(data:any){
    return this.http.post(ServerDetails.serverIP + '/login', data,{headers:this.header})
  }



}
