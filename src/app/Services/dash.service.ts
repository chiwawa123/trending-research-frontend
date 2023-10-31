import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { ServerDetails } from '../server-details';

@Injectable({
  providedIn: 'root'
})
export class DashService {
  header:any;

  constructor(private http:HttpClient, private headers:TokenService) {
    this.header=headers.getHeaders();
   }

  getDashboardData(){
    return this.http.get(ServerDetails.serverIP + "/dashData",{headers:this.header});
  }
}
