import { Component, OnInit } from '@angular/core';
import { DashService } from 'src/app/Services/dash.service';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(private dashService:DashService, private headers:TokenService){}
  data:any;

  ngOnInit(){
  this.DashData();
  console.log(this.headers.getHeaders());
  
  }

  DashData(){
    this.dashService.getDashboardData().subscribe(res=>{
      this.data=res;
      // console.log(this.data);
    });
  }


}
