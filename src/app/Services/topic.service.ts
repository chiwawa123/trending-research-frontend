import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { ServerDetails } from '../server-details';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  header:any;
  constructor(private http:HttpClient, public headers: TokenService) { 
    this.header= headers.getHeaders();
  }
  getTopics(){
    return this.http.get(ServerDetails.serverIP + '/viewTopics',{headers:this.header});
  }
  postTopic(data:any){
    return this.http.post(ServerDetails.serverIP + '/addTopic',data);
  }

  removeTopic(data:any){
    return this.http.post(ServerDetails.serverIP + "/deleteTopic",data,{headers:this.header});
  }

  updateTopic(data:any){
    return this.http.post(ServerDetails.serverIP + '/updateTopic',data);
  }
 
}
