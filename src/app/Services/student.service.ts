import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  getStudent(){
    return this.http.get("http://127.0.0.1:8000/api/viewStudents");
  }

  addStudent(data:any){
    return this.http.post("http://127.0.0.1:8000/api/addStudent",data);
  }

  removeStudent(data:any){
    
    return this.http.post("http://127.0.0.1:8000/api/deleteStudent",data);
  }
  updateStudent(data:any){
    
    return this.http.post("http://127.0.0.1:8000/api/updateStudent",data);
  }
}
