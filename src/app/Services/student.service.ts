import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  header:any;

  constructor(private http:HttpClient,private headers:TokenService) { 
    this.header= headers.getHeaders();
  }

  getStudent(){
    return this.http.get("http://127.0.0.1:8000/api/viewStudents",{headers:this.header});
  }

  addStudent(data:any){
    return this.http.post("http://127.0.0.1:8000/api/addStudent",data);
  }

  removeStudent(data:any){
    
    return this.http.post("http://127.0.0.1:8000/api/deleteStudent",data,{headers:this.header});
  }
  updateStudent(data:any){
    
    return this.http.post("http://127.0.0.1:8000/api/updateStudent",data);
  }
}
