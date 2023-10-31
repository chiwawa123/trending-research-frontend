import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { ServerDetails } from '../server-details';

@Injectable({
  providedIn: 'root'
})
export class GenderServiceService {
  header:any;

  constructor(private http:HttpClient, private headers:TokenService) { 
    this.header = headers.getHeaders();
  }

  getGender(){
    return this.http.get(ServerDetails.serverIP + '/viewGender',{headers:this.header});
  }
  addGender(data:any){
    return this.http.post(ServerDetails.serverIP + '/addGender',data,{headers:this.header});
  }
  removeGender(data:any){
    return this.http.post(ServerDetails.serverIP + '/deleteGender',data,{headers:this.header});

  }
  updateGender(data:any){
    return this.http.post(ServerDetails.serverIP + '/updateGender',data,{headers:this.header});

  }
}
