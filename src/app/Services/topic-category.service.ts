import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class TopicCategoryService {
  header:any;

  constructor(private http:HttpClient,public headers:TokenService) { 
    this.header=headers.getHeaders();
  }

  getTopicCategory(){
    return this.http.get('http://127.0.0.1:8000/api/viewTopicCategory',{headers:this.header});
  }
  addTopicCategory(data:any){
    return this.http.post('http://127.0.0.1:8000/api/addTopicCategory',data,{headers:this.header});
  }
  removeCategory(data:any){
    return this.http.post('http://127.0.0.1:8000/api/deleteCategory',data,{headers:this.header});
  }
  updateCategory(data:any){
    return this.http.post('http://127.0.0.1:8000/api/updateTopicCategory',data,{headers:this.header});
  }

  
}
