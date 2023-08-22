import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenderServiceService {

  constructor(private http:HttpClient) { }

  getGender(){
    return this.http.get('http://127.0.0.1:8000/api/viewGender');
  }
  addGender(data:any){
    return this.http.post('http://127.0.0.1:8000/api/addGender',data);
  }
  removeGender(data:any){
    return this.http.post('http://127.0.0.1:8000/api/deleteGender',data);

  }
  updateGender(data:any){
    return this.http.post('http://127.0.0.1:8000/api/updateGender',data);

  }
}
