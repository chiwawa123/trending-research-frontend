import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/Services/student.service';
import { TestimonialService } from 'src/app/Services/testimonial.service';
import { TopicService } from 'src/app/Services/topic.service';
import { TestimonialModel } from 'src/app/testimonial-model.model';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit{
  testimonials:any;
  students:any;
  topics:any;
  file:any;
  data:any;

  dtoptions: DataTables.Settings={};
  dtTrigger:Subject<any>=new Subject<any>();
  
 public form ={
  
  description:null,
  student_id:null,
  topic_id:null,
  is_active:'',
  date_posted:null,
  testimonial_id:null,

 }

  constructor(private testimonialService:TestimonialService,private studentService:StudentService,private topicService:TopicService,private toastr:ToastrService){

  }

  ngOnInit(){
    this.getTestimonialData();
    this.getStudents();
    this.getTopics();
    this.dtoptions={
      pagingType:'full_numbers',
      searching:true,
      pageLength: 10,
      destroy:true
    };
    
      
  }
  getTestimonialData(){
    this.testimonialService.getTestimonilas().subscribe(res=>{
      this.testimonials=res;
      console.log(this.testimonials);
      var table=$('#testimonialTable').DataTable();
      table.destroy();
      this.dtTrigger.next(null);
    });
  }

  addTestimonialData(){
    this.testimonialService.addTestimonial(this.form).subscribe(res=>{
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
      this.getTestimonialData();
   

    });
  }



  getStudents(){
    return this.studentService.getStudent().subscribe(res=>{
      this.students=res;
      // console.log(this.students);
    })
  }

  getTopics(){
    this.topicService.getTopics().subscribe(res=>{
      this.topics=res;
      // console.log(this.topics);
    })
  }
  deleteTestimonial(item: any){
    this.form=item;
    // console.log(this.form);
    this.testimonialService.removeTestimonial(this.form).subscribe(res=>{
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
   
      this.getTestimonialData();
    });
  }

  TopicInfor(){
    this.topicService.getTopics().subscribe(res=>{
      this.topics=res;
      // console.log(this.topics);

    });
  }
  setTestimonial(t:any){
    var status = 'active';
    this.form.is_active = status;
    this.form.testimonial_id = t.testimonial_id;
    this.testimonialService.updateTestimonial(this.form).subscribe(res=>{
      t=res;
    
      this.data=t;
   
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
      this.getTestimonialData();
    });
    
  }

  testimonialUpdate(item:any){
    console.log(this.form);
    this.testimonialService.updateTestimonial(this.form).subscribe(res=>{
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
      this.getTestimonialData();
    });
  }

}
