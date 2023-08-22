import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './Admin/main/main.component';
import { TopicsComponent } from './Admin/topics/topics.component';
import { TestimonialsComponent } from './Admin/testimonials/testimonials.component';
import { TopicCategoryComponent } from './Admin/topic-category/topic-category.component';
import { SchoolsComponent } from './Admin/schools/schools.component';
import { GenderComponent } from './components/gender/gender.component';
import { StudentComponent } from './components/student/student.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSelectModule } from '@ng-select/ng-select';
import { AngularEditorModule } from '@kolkov/angular-editor';







import { ToastrModule } from 'ngx-toastr';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    RequestResetComponent,
    ResponseResetComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    TopicsComponent,
    TestimonialsComponent,
    TopicCategoryComponent,
    SchoolsComponent,
    GenderComponent,
    StudentComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    NgSelectModule,
    AngularEditorModule,
    DataTablesModule,
  
  
    
    ToastrModule.forRoot({progressBar:true,timeOut:6000,progressAnimation:'increasing',preventDuplicates:true}), // ToastrModule added


  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
