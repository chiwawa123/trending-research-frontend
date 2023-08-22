import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http:HttpClient) { }

  getSchools(){
    return this.http.get('http://127.0.0.1:8000/api/viewSchool');
  }
}
