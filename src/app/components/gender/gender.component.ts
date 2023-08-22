import { Component, OnInit } from '@angular/core';
import { GenderServiceService } from 'src/app/Services/gender-service.service';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent implements OnInit{

  dtoptions: DataTables.Settings={};
  dtTrigger:Subject<any>=new Subject<any>();

  gender:any;
  error:any;

  public form={
    gender_name:null
  }
  data: any;

  constructor(private genderService:GenderServiceService,private toastr: ToastrService){}

  ngOnInit(): void {
    this.getGender();
    this.dtoptions={
      pagingType:'full_numbers',
      searching:true,
      pageLength: 10,
      destroy:true
    };
      
  }

  getGender(){
    return this.genderService.getGender().subscribe(res=>{
      this.gender=res;
      var table=$('#genderTable').DataTable();
      table.destroy();
      this.dtTrigger.next(null);
    })
  }

  addGenderData(){
    return this.genderService.addGender(this.form).subscribe(res=>{
      console.log(res);
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
        
        this.getGender();
      
    })
  }
  deleteGender(item: any){
    this.form=item;
    this.genderService.removeGender(this.form).subscribe(res=>{
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
      
      console.log(this.data);
      this.getGender();
    });
  }
  

  setGender(t:any){
    this.form=t;
  }

  genderUpdate(item:any){
    this.form=item;
    this.genderService.updateGender(this.form).subscribe(res=>{
      this.data=res;
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
      console.log(this.data);
      this.getGender();
  });

  }
  
}
