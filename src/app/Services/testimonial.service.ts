import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  constructor(private http:HttpClient) { }
  
  getTestimonilas(){
    return this.http.get('http://127.0.0.1:8000/api/viewTestimonial');

  }

  addTestimonial(data:any){
    return this.http.post("http://127.0.0.1:8000/api/addTestimonial",data);
  }

  removeTestimonial(data:any){
    return this.http.post('http://127.0.0.1:8000/api/deleteTestimonial',data);
  }
  updateTestimonial(data:any){
    return this.http.post("http://127.0.0.1:8000/api/updateTestimonial",data);
  }


}
