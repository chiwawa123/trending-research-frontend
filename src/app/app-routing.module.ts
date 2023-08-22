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
  { path:'main',component:MainComponent, children:[{

    path:'dashboard',component:DashboardComponent
  },
  { path:'topic', component:TopicsComponent},
  { path:'testimonial', component:TestimonialsComponent},
  { path:'topicCategory', component:TopicCategoryComponent},
  { path:'school', component:SchoolsComponent},
  { path:'student', component:StudentComponent},
  { path:'review', component:ReviewsComponent},
  { path:'gender', component:GenderComponent}

]},
  
  { path:'login',component:LoginComponent},
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
