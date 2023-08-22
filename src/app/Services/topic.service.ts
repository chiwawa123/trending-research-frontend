import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http:HttpClient) { }

  getTopics(){

    return this.http.get('http://127.0.0.1:8000/api/viewTopics');
  }
  postTopic(data:any){
    return this.http.post('http://127.0.0.1:8000/api/addTopic',data);
  }

  removeTopic(data:any){
    return this.http.post("http://127.0.0.1:8000/api/deleteTopic",data);
  }

  updateTopic(data:any){
    return this.http.post('http://127.0.0.1:8000/api/updateTopic',data);
  }
 
}
