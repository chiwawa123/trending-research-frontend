import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { ServerDetails } from '../server-details';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  header:any;

  constructor(private http:HttpClient,private headers:TokenService) { 
    this.header = headers.getHeaders();
  }

  getSchools(){
    return this.http.get(ServerDetails.serverIP + '/viewSchool',{headers:this.header});
  }
}
