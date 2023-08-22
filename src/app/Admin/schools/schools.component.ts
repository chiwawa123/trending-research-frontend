import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SchoolService } from 'src/app/Services/school.service';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {
  schools:any;
  dtoptions: DataTables.Settings={};
  dtTrigger:Subject<any>=new Subject<any>();

  ngOnInit(){
    this.school_data();
    this.dtoptions={
      pagingType:'full_numbers',
      searching:true,
      pageLength: 10,
    };
      
  }
  constructor(private schoolService:SchoolService){

  }
  school_data(){

    return this.schoolService.getSchools().subscribe(res=>{
      this.schools=res;
      this.dtTrigger.next(null);
      console.log(this.schools);
    })

  }

}
