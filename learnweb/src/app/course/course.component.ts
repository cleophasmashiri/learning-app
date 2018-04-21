import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { ICourse } from './course';
import { CourseFilterPipe } from './course-filter.pipe';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  errorMessage: string;
  courses: ICourse[];

  constructor( private _courseService: CourseService) { }

  ngOnInit() {
    this._courseService.getCourses()
    .subscribe(
      courses => this.courses = courses,
      error => this.errorMessage = <any>error);
  }

  searchCourses() {
    return null;
  }

}
