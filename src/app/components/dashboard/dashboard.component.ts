import { Component, OnInit } from '@angular/core';
import { DashService } from 'src/app/Services/dash.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(private dashService:DashService){}
  data:any;

  ngOnInit(){
  this.DashData();
  }

  DashData(){
    this.dashService.getDashboardData().subscribe(res=>{
      this.data=res;
      console.log(this.data);
    });
  }


}
