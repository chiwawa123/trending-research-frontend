import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {
  header:any;

  constructor(private http:HttpClient, private headers:TokenService) {
    this.header= headers.getHeaders();
   }
  
  getTestimonilas(){
    return this.http.get('http://127.0.0.1:8000/api/viewTestimonial',{headers:this.header});

  }

  addTestimonial(data:any){
    return this.http.post("http://127.0.0.1:8000/api/addTestimonial",data, {headers:this.header});
  }

  removeTestimonial(data:any){
    return this.http.post('http://127.0.0.1:8000/api/deleteTestimonial',data,{headers:this.header});
  }
  updateTestimonial(data:any){
    return this.http.post("http://127.0.0.1:8000/api/updateTestimonial",data,{headers:this.header});
  }


}
