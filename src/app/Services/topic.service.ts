import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  header:any;

  constructor(private http:HttpClient, private headers: TokenService) { 
    this.header= headers.getHeaders();
  }

  getTopics(){

    return this.http.get('http://127.0.0.1:8000/api/viewTopics',{headers:this.header});
  }
  postTopic(data:any){
    return this.http.post('http://127.0.0.1:8000/api/addTopic',data);
  }

  removeTopic(data:any){
    return this.http.post("http://127.0.0.1:8000/api/deleteTopic",data,{headers:this.header});
  }

  updateTopic(data:any){
    return this.http.post('http://127.0.0.1:8000/api/updateTopic',data);
  }
 
}
