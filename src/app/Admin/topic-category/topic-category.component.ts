import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'src/app/Services/school.service';
import { TopicCategoryService } from 'src/app/Services/topic-category.service';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-topic-category',
  templateUrl: './topic-category.component.html',
  styleUrls: ['./topic-category.component.css']
})
export class TopicCategoryComponent implements OnInit{

  topicCategory:any;
  schools:any;
  selected:any;
  data:any;
  dtoptions: DataTables.Settings={};
  dtTrigger:Subject<any>=new Subject<any>();

  public form={
    school_id:null,
    topic_category_name:null

  }

  constructor(private topicCategoryService:TopicCategoryService, private schoolData:SchoolService,private toastr:ToastrService){}
  ngOnInit(){
    this.getTopicCategorys();
    this.getSchools();
    this.dtoptions={
      pagingType:'full_numbers',
      searching:true,
      pageLength: 10,
      destroy:true
    };
      
  }

  getTopicCategorys(){
    return this.topicCategoryService.getTopicCategory().subscribe(res=>{
      this.topicCategory=res;
      var table=$('#topicCategoryTable').DataTable();
      table.destroy();
      this.dtTrigger.next(null);
    });
  }

  getSchools(){
    return this.schoolData.getSchools().subscribe(res=>{
      this.schools=res;
      // console.log(res);
    });
  }

  addTopicCategoryData(){
    return this.topicCategoryService.addTopicCategory(this.form).subscribe(res=>{
     this.data=res;
     if(this.data.status ==200){
      this.toastr.success(
        JSON.stringify(this.data.message),
        JSON.stringify(this.data.data),
        {
          timeOut:6000,
          progressBar:true,

        }
      );
    }else{
      this.toastr.error(
        JSON.stringify(this.data.message),
        JSON.stringify(this.data.data),
        {
          timeOut:6000,
          progressBar:true
        }

      )
    }
    this.getTopicCategorys();
    })
  }

  deleteTopicCategory(item: any){
    this.form=item;
    this.topicCategoryService.removeCategory(this.form).subscribe(res=>{
      this.data=res;
      if(this.data.status ==200){
        this.toastr.success(
          JSON.stringify(this.data.message),
          JSON.stringify(this.data.data),
          {
            timeOut:6000,
            progressBar:true,

          }
        );
      }else{
        this.toastr.error(
          JSON.stringify(this.data.message),
          JSON.stringify(this.data.data),
          {
            timeOut:6000,
            progressBar:true
          }

        )
      }
      // console.log(res);
      this.getTopicCategorys();
    });
  }
  setCategory(t:any){
    this.form=t;

  }

  categoryUpdate(item:any){
    this.topicCategoryService.updateCategory(this.form).subscribe(res=>{
      item=res;
      this.data=item;
      if (this.data.status == 200) {
        this.toastr.success(
          JSON.stringify(this.data.message),
          JSON.stringify(this.data.data),
          {
            timeOut: 6000,
            progressBar: true,
          }
        );
      } else {
        this.toastr.error(
          JSON.stringify(this.data.message),
          JSON.stringify(this.data.data),
          {
            timeOut: 6000,
            progressBar: true,
          }
        );
      }
      this.getTopicCategorys();
      console.log(this.form);
      

    });

  }



}
