import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { XHRBackend, Http, RequestOptions } from "@angular/http";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course/course.service';
import { AuthService } from './auth/auth.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CourseFilterPipe } from './course/course-filter.pipe';
import { AuthComponent } from './auth/auth.component';
import { ControlMessagesComponent } from './control-messages/control-messages.component';
import { ValidationService } from './control-messages/validation.service';
import { RegisterComponent } from './register/register.component';
import { RegisterInstructorComponent } from './register-instructor/register-instructor.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseDetailService } from './course-detail/course-detail.service';
import { HomeComponent } from './home/home.component';
import { LearnComponent } from './learn/learn.component';
import { VideoComponent } from './video/video.component';
import { httpFactory } from './http.factory';
import { Credential } from './auth/credential';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },{
    path: '',
    component: HomeComponent,
  },
  {
    path: 'courses',
    component: CourseComponent,
  }, {   
    path: 'courses/:courseId',
    component: CourseDetailComponent,
  }, {   
    path: 'learn/:courseId',
    component: LearnComponent,
  }, {   
    path: 'learn/:courseId/:weekId',
    component: LearnComponent,
  },{   
    path: 'video/:courseId/:weekId/:videoId',
    component: VideoComponent,
  }, {   
    path: 'learn/:courseId/:week',
    component: LearnComponent,
  },{
    path: 'login',
    component: AuthComponent,
  }
  , {
    path: 'register',
    component: RegisterComponent,
  } ,{
    path: 'instructors',
    component: RegisterInstructorComponent,
  }
  // ,
  // {
  //   path: '**', redirectTo: ''
  // }
];

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseFilterPipe,
    AuthComponent,
    ControlMessagesComponent,
    RegisterComponent,
    RegisterInstructorComponent,
    CourseDetailComponent,
    HomeComponent,
    LearnComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [Credential, CourseService, AuthService, ValidationService, 
    CourseDetailService, 
  {
            provide: Http,
            useFactory: httpFactory,
            deps: [XHRBackend, RequestOptions]
        }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
