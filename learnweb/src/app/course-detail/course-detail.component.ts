import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseDetailService } from './course-detail.service';
import { ICourse } from '../course/course';
import { CourseSection } from '../course/course-section';
import { Instructor } from '../course/instructor';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _courseDetailService: CourseDetailService) { }

  private course: ICourse;
  private errorMessage: string;
  private courseId: string;

  ngOnInit() {
    this.courseId = this.route.snapshot.paramMap.get('courseId');
    this._courseDetailService.getCourse(this.courseId)
      .subscribe(course => this.course = course,
      error => this.errorMessage = <any>error);
  }
}
