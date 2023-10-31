import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { ServerDetails } from '../server-details';

@Injectable({
  providedIn: 'root'
})
export class TopicCategoryService {
  header:any;

  constructor(private http:HttpClient,public headers:TokenService) { 
    this.header=headers.getHeaders();
  }

  getTopicCategory(){
    return this.http.get(ServerDetails.serverIP + '/viewTopicCategory',{headers:this.header});
  }
  addTopicCategory(data:any){
    return this.http.post(ServerDetails.serverIP + '/addTopicCategory',data,{headers:this.header});
  }
  removeCategory(data:any){
    return this.http.post(ServerDetails.serverIP + '/deleteCategory',data,{headers:this.header});
  }
  updateCategory(data:any){
    return this.http.post(ServerDetails.serverIP + '/updateTopicCategory',data,{headers:this.header});
  }

  
}
