import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  header:any;

  constructor(private http:HttpClient,private headers:TokenService) { 
    this.header = headers.getHeaders();
  }

  getSchools(){
    return this.http.get('http://127.0.0.1:8000/api/viewSchool',{headers:this.header});
  }
}
