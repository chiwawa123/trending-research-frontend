import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { BeforeLoginService } from './Services/before-login.service';
import { AfterLoginService } from './Services/after-login.service';
import { MainComponent } from './Admin/main/main.component';
import { TopicsComponent } from './Admin/topics/topics.component';
import { TestimonialsComponent } from './Admin/testimonials/testimonials.component';
import { TopicCategoryComponent } from './Admin/topic-category/topic-category.component';
import { SchoolsComponent } from './Admin/schools/schools.component';
import { StudentComponent } from './components/student/student.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { GenderComponent } from './components/gender/gender.component';

const routes: Routes = [
  { path:'main',component:MainComponent,   canActivate:[AfterLoginService], children:[{

    path:'dashboard',component:DashboardComponent,  
    canActivate:[AfterLoginService]
  },
  { path:'topic', component:TopicsComponent,   canActivate:[AfterLoginService]},
  { path:'testimonial', component:TestimonialsComponent,   canActivate:[AfterLoginService]},
  { path:'topicCategory', component:TopicCategoryComponent,    canActivate:[AfterLoginService]},
  { path:'school', component:SchoolsComponent,    canActivate:[AfterLoginService]},
  { path:'student', component:StudentComponent,    canActivate:[AfterLoginService]},
  { path:'review', component:ReviewsComponent,   canActivate:[AfterLoginService]},
  { path:'gender', component:GenderComponent,    canActivate:[AfterLoginService]}

]},
  
  { path:'login',
    component:LoginComponent,
    canActivate:[BeforeLoginService] 
  },
  { path:'signup',component:SignupComponent},
  { path:'request-password',component:RequestResetComponent},
  { path:'response-password-reset',component:ResponseResetComponent},
  {
    path:'**',redirectTo:'login', pathMatch: 'prefix'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
