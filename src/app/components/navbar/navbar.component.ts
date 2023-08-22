import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn: boolean= false;
 
  
  constructor(private authService:AuthService,private route:Router,private token:TokenService){}

  ngOnInit(){

    this.authService.authStatus.subscribe(value=>this.loggedIn=value);
      
  }

  logout(event:MouseEvent){
    event.preventDefault();
    this.token.remove();
    this.authService.changeAuthStatus(false);
    this.route.navigateByUrl('/login');
  }




}
