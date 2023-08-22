import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicCategoryService {

  constructor(private http:HttpClient) { }

  getTopicCategory(){
    return this.http.get('http://127.0.0.1:8000/api/viewTopicCategory');
  }
  addTopicCategory(data:any){
    return this.http.post('http://127.0.0.1:8000/api/addTopicCategory',data);
  }
  removeCategory(data:any){
    return this.http.post('http://127.0.0.1:8000/api/deleteCategory',data);
  }
  updateCategory(data:any){
    return this.http.post('http://127.0.0.1:8000/api/updateTopicCategory',data);
  }

  
}
