import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class GenderServiceService {
  header:any;

  constructor(private http:HttpClient, private headers:TokenService) { 
    this.header = headers.getHeaders();
  }

  getGender(){
    return this.http.get('http://127.0.0.1:8000/api/viewGender',{headers:this.header});
  }
  addGender(data:any){
    return this.http.post('http://127.0.0.1:8000/api/addGender',data,{headers:this.header});
  }
  removeGender(data:any){
    return this.http.post('http://127.0.0.1:8000/api/deleteGender',data,{headers:this.header});

  }
  updateGender(data:any){
    return this.http.post('http://127.0.0.1:8000/api/updateGender',data,{headers:this.header});

  }
}
