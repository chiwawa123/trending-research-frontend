import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { ServerDetails } from '../server-details';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {
  header:any;

  constructor(private http:HttpClient, public headers:TokenService) {
    this.header= headers.getHeaders();
   }
  
  getTestimonilas(){
    return this.http.get(ServerDetails.serverIP + '/viewTestimonial',{headers:this.header});

  }

  addTestimonial(data:any){
    return this.http.post(ServerDetails.serverIP + "/addTestimonial",data);
  }

  removeTestimonial(data:any){
    return this.http.post(ServerDetails.serverIP + '/deleteTestimonial',data,{headers:this.header});
  }
  updateTestimonial(data:any){
    return this.http.post(ServerDetails.serverIP + "/updateTestimonial",data,{headers:this.header});
  }


}
