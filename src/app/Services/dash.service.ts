import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class DashService {
  header:any;

  constructor(private http:HttpClient, private headers:TokenService) {
    this.header=headers.getHeaders();
   }

  getDashboardData(){
    return this.http.get("http://127.0.0.1:8000/api/dashData",{headers:this.header});
  }
}
