import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { ServerDetails } from '../server-details';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  header:any;

  constructor(private http:HttpClient,private headers:TokenService) { 
    this.header= headers.getHeaders();
  }

  getStudent(){
    return this.http.get(ServerDetails.serverIP + "/viewStudents",{headers:this.header});
  }

  addStudent(data:any){
    return this.http.post(ServerDetails.serverIP + "/addStudent",data);
  }

  removeStudent(data:any){
    
    return this.http.post(ServerDetails.serverIP + "/deleteStudent",data,{headers:this.header});
  }
  updateStudent(data:any){
    
    return this.http.post(ServerDetails.serverIP + "/updateStudent",data);
  }
}
