import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public form = {
    email: null,
    password: null,
    first_name: null,
    last_name: null,
    password_confirmation: null,
  };
  public error = [];
  constructor(
    private jarwis: JarwisService,
    private token: TokenService,
    private route: Router
  ) {}

  onSubmit() {
    console.log(this.form);
    this.jarwis.signUp(this.form).subscribe(
      (data) => this.handleResponse(data),
      (error) => this.handleError(error)
    );
  }
  ngOnInit() {}
  handleError(error: any) {
    return (this.error = error.error.errors);
  }
  handleResponse(data: any) {
    this.token.handle(data.access_token);
    this.route.navigateByUrl('/main/dashboard');
  }
}
