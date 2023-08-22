import { Component, OnInit } from '@angular/core';
import { GenderServiceService } from 'src/app/Services/gender-service.service';
import { StudentService } from 'src/app/Services/student.service';
import { Student } from 'src/app/student';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{
  students:any;
  gender:any;
  data:any;
  selected:any;
  file:any;
  dtoptions: DataTables.Settings={};
  dtTrigger:Subject<any>=new Subject<any>();

  student = new Student();
 
  public form={
    gender_id:null,
    first_name:null,
    last_name:null,
    student_id:null,
    image:null,

  }
  ngOnInit(): void {
      this.getStudentData();
      this.getGenderData();
      this.dtoptions={
        pagingType:'full_numbers',
        searching:true,
        pageLength: 10,
        destroy:true
      };
  
  }

  constructor(private studentService:StudentService, private genderService:GenderServiceService,private toastr:ToastrService){}
  getStudentData(){
    this.studentService.getStudent().subscribe(res=>{
      this.students=res;
      var table=$('#studentTable').DataTable();
      table.destroy();
      this.dtTrigger.next(null);
      // console.log(this.students);
    });
  }

  addStudentData(){

    var formdata = new FormData();
    formdata.append("first_name", this.student.first_name);
    formdata.append("last_name", this.student.last_name);
    formdata.append("gender_id", this.student.gender_id);
    formdata.append("image", this.file, this.file.name);
   

    this.studentService.addStudent(formdata).subscribe((response:any)=>{
    this.data=response;
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
      this.getStudentData();

    });
  }

  getGenderData(){
    this.genderService.getGender().subscribe(res=>{
      this.gender=res;
      // console.log(this.gender);
    });
  }

  deleteStudent(item: any){
    this.form=item;
    this.studentService.removeStudent(this.form).subscribe(res=>{
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
      console.log(res);
      this.getStudentData();
    });
  }


  imageUpload(event:any){
    this.file=event.target.files[0];
    // console.log(this.file);

  }
  setStudent(t:any){
    this.student=t;

  }
  studentUpdate(item:any){
    
    var formdata = new FormData();

    formdata.append("image", this.file, this.file.name);
    formdata.append("first_name", this.student.first_name);
    formdata.append("last_name", this.student.last_name);
    formdata.append("gender_id", this.student.gender_id);
    formdata.append("student_id", this.student.student_id);
    
 

    this.studentService.updateStudent(formdata).subscribe((response: any) => {
      this.data=response;
    
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

    });

  }
  imageUpdate(event:any){
    this.file=event.target.files[0];
    // console.log(this.file);

  }





}
